import { Track } from "@/types/spotify.types";

const getAccessToken = async (): Promise<{ access_token: string } | null> => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!refresh_token || !clientId || !clientSecret) {
    return null;
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${clientId}:${clientSecret}`,
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }).toString(),
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
};

export const topTracks = async (): Promise<Track[]> => {
  const token = await getAccessToken();

  if (!token) {
    return [];
  }

  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?limit=5",
    {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    },
  );

  if (!response.ok) {
    return [];
  }

  const data = await response.json();

  return data.items as Track[];
};
