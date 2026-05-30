import type { Metadata } from "next";
import { metadata as studioMetadata, viewport as studioViewport } from "next-sanity/studio";

import { Studio } from "./studio";
import { isSanityConfigured } from "@/sanity/lib/client";

export const dynamic = "force-static";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Heatwave CMS",
};

export const viewport = studioViewport;

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="min-h-screen bg-sky px-4 py-6">
        <section className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-3xl flex-col justify-center rounded-[30px] bg-white p-8 text-ink">
          <div className="flex flex-col gap-5">
            <p className="text-sm leading-[1.5] font-semibold text-brand">
              Sanity CMS
            </p>
            <h1 className="text-[2.5rem] leading-[1.08] font-semibold md:text-[4rem]">
              Connect your Sanity project
            </h1>
            <p className="max-w-[42rem] text-lg leading-[1.5] text-ink-soft">
              Add your Sanity project ID to `.env.local`, then restart the dev
              server. The Studio will load here at `/admin`.
            </p>
            <pre className="overflow-x-auto rounded-[18px] bg-sky p-4 text-sm leading-[1.6] text-ink">
              {`NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-29`}
            </pre>
          </div>
        </section>
      </main>
    );
  }

  return <Studio />;
}
