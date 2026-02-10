"use client";

import { useQuery } from "@tanstack/react-query";

type GitHubRepo = {
  html_url: string;
  full_name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  license: { spdx_id: string } | null;
  owner: {
    avatar_url: string;
    login: string;
  };
};

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionResponse = {
  contributions?: ContributionDay[];
};

const fetchGitHubRepo = async (repo: string): Promise<GitHubRepo> => {
  const response = await fetch(`https://api.github.com/repos/${repo}`);

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repository");
  }

  return (await response.json()) as GitHubRepo;
};

const fetchGitHubCalendar = async (user: string): Promise<ContributionDay[]> => {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${user}?y=last`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub activity");
  }

  const data = (await response.json()) as ContributionResponse;
  return data.contributions ?? [];
};

export const useGitHubRepo = (repo: string) => {
  return useQuery({
    queryKey: ["github-repo", repo],
    queryFn: () => fetchGitHubRepo(repo),
    enabled: Boolean(repo),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useGitHubCalendar = (user: string) => {
  return useQuery({
    queryKey: ["github-calendar", user],
    queryFn: () => fetchGitHubCalendar(user),
    enabled: Boolean(user),
    staleTime: 1000 * 60 * 15,
    gcTime: 1000 * 60 * 30,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};
