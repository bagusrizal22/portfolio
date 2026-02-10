import { posts } from "#site/content";

import { Metadata } from "next";

import PostCard from "@/components/shared/cards/post-card";
import TemplateCard from "@/components/shared/cards/template-card";
import WorkCard from "@/components/shared/cards/work-card";
import Paragraph from "@/components/shared/paragraph";

import SectionWrapper from "@/components/motion/section-wrapper";

import { templateItems } from "@/lib/assets";
import { workItems } from "@/lib/constants";
import { getFeaturedPosts } from "@/velite/post";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "An archive of my own, filled with my writings and happy memories.",
};

export default function Page() {
  const featuredPosts = getFeaturedPosts(
    posts.filter((post) => post.published),
  );

  return (
    <SectionWrapper
      id="archive"
      className="flex h-auto grow flex-col items-center gap-y-16 px-4 md:gap-y-20 lg:gap-y-24"
    >
      <Paragraph title="My grand archive">
        <p>
          I’m a sentimental builder.
          I keep records of things I’ve created projects, systems, products, and experiments not just as a portfolio, but as a way to trace my growth over time.
          This archive is my reminder that progress doesn’t always look big day-to-day, but becomes meaningful when viewed in hindsight.
        </p>
      </Paragraph>

      {/* <div className="w-full space-y-4">
        <Paragraph title="Featured posts" link href="/post" />
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {featuredPosts.length > 0 ? (
            featuredPosts
              .slice(0, 2)
              .map((item) => <PostCard key={item.slug} {...item} />)
          ) : (
            <blockquote className="col-span-full border-s-2 border-zinc-500 bg-linear-to-r from-zinc-500/20 to-transparent px-4 py-2">
              <p className="text-sm leading-normal font-medium text-zinc-600 italic dark:text-zinc-400">
                Nothing to see here yet! Check back later for some exciting
                content.
              </p>
            </blockquote>
          )}
        </div>
      </div> */}

      <div className="w-full space-y-4">
        <Paragraph title="Career path">
          <p>
            Alongside my work as a fulltime developer, I’ve focused on building and maintaining fullstack solutions
            within the digital marketing space ranging from internal tools, campaign systems, automation,
            to data-driven workflows.
          </p>
          <p>
            Each role represents a phase of hands-on learning, where technology is not just built, but aligned closely
            with marketing goals, business growth, and operational efficiency.
          </p>
        </Paragraph>
        <div className="flex w-full flex-col">
          {workItems.map((item, index) => (
            <WorkCard {...item} key={index} />
          ))}
        </div>
      </div>

      <div className="w-full space-y-4">
        <Paragraph title="Side projects" />
        <div className="xs:grid-cols-2 grid w-full grid-cols-1 gap-4">
          {templateItems.map((item, index) => (
            <TemplateCard {...item} key={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
