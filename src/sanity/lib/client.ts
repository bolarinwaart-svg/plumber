import { createClient } from "next-sanity";

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-05-29";

export const isSanityConfigured =
  Boolean(sanityProjectId) && sanityProjectId !== "replaceid";

export const sanityClient = createClient({
  projectId: sanityProjectId ?? "replaceid",
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true,
});
