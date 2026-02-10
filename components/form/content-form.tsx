"use client";

import {
  PiArrowClockwiseBold,
  PiArrowElbowDownLeftBold,
  PiSignOutDuotone,
} from "react-icons/pi";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import authMutation from "@/mutation/auth.mutation";
import contentMutation from "@/mutation/content.mutation";

const ContentForm = () => {
  const [content, setContent] = useState("");
  const { addContentMutation } = contentMutation();

  const { signOutMutation } = authMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      await addContentMutation.mutateAsync(content.trim());
    } catch (error) {
      console.error("Failed to add content:", error);
    } finally {
      setContent("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      if (content.trim() && !addContentMutation.isPending) {
        handleSubmit(e as any);
      }
    }
  };

  return (
    <form
      className="w-full space-y-2"
      onSubmit={handleSubmit}
      id="content-form"
    >
      <Textarea
        placeholder="Leave a message..."
        name="content"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        className="min-h-24 w-full text-sm"
        disabled={addContentMutation.isPending}
        maxLength={100}
      />

      <div className="flex items-center justify-between gap-x-2">
        <Button
          onClick={() => signOutMutation.mutate()}
          disabled={signOutMutation.isPending}
          type="button"
          size="icon"
          variant="secondary"
          className="size-9 rotate-180"
        >
          {signOutMutation.isPending ? (
            <PiArrowClockwiseBold className="size-4 animate-spin" />
          ) : (
            <PiSignOutDuotone className="size-4" />
          )}
        </Button>
        <Button
          disabled={addContentMutation.isPending || !content.trim()}
          type="submit"
          size="sm"
          variant="secondary"
          className=""
        >
          {addContentMutation.isPending ? (
            <PiArrowClockwiseBold className="size-4 animate-spin" />
          ) : (
            <>
              <span>Enter</span>
              <PiArrowElbowDownLeftBold className="size-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContentForm;
