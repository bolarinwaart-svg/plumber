import fs from "node:fs";
import path from "node:path";

import { isSanityConfigured, sanityClient } from "@/sanity/lib/client";
import {
  blogPostsQuery,
  servicesQuery,
  siteSettingsQuery,
  testimonialAvatarsQuery,
  testimonialsQuery,
} from "@/sanity/lib/queries";

const contentRoot = path.join(process.cwd(), "content");

export type NavItem = {
  label: string;
  href: string;
};

export type SiteSettings = {
  brandName: string;
  companyName: string;
  metadata: {
    title: string;
    description: string;
  };
  contact: {
    email: string;
    label: string;
  };
  navItems: NavItem[];
  footer: {
    headline: string;
    enquiryCopy: string;
    privacyCopy: string;
    legalLinks: string[];
    socialLinks: string[];
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Plumbing" | "Heating";
  readTime: string;
  image: string;
  alt: string;
  featured: boolean;
  order: number;
};

export type Service = {
  slug: string;
  category: "home" | "plumbing" | "heating";
  title: string;
  titleLines?: string[];
  description?: string;
  image: string;
  alt: string;
  imageClassName?: string;
  order: number;
};

export type Testimonial = {
  slug: string;
  name: string;
  title: string;
  rating: number;
  image: string;
  alt: string;
  quoteLines: string[];
  featured: boolean;
  order: number;
};

export type TestimonialAvatar = {
  src: string;
  alt: string;
};

function readJsonFile<T>(relativePath: string): T {
  const filePath = path.join(contentRoot, relativePath);
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}

function readCollection<T extends { order?: number }>(relativePath: string): T[] {
  const directory = path.join(contentRoot, relativePath);

  return fs
    .readdirSync(directory)
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => readJsonFile<T>(path.join(relativePath, fileName)))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

async function fetchSanityCollection<T>(query: string) {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    return await sanityClient.fetch<T[]>(query);
  } catch {
    return null;
  }
}

async function fetchSanityCollectionOrFallback<T extends { order?: number }>(
  query: string,
  fallbackPath: string,
) {
  const sanityItems = await fetchSanityCollection<T>(query);

  if (sanityItems?.length) {
    return sanityItems;
  }

  return readCollection<T>(fallbackPath);
}

async function fetchSanityDocument<T>(query: string) {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query);
  } catch {
    return null;
  }
}

export async function getSiteSettings() {
  return (
    (await fetchSanityDocument<SiteSettings>(siteSettingsQuery)) ??
    readJsonFile<SiteSettings>("site.json")
  );
}

export async function getBlogPosts(options?: { featuredOnly?: boolean; limit?: number }) {
  let posts = await fetchSanityCollectionOrFallback<BlogPost>(blogPostsQuery, "blog");

  if (options?.featuredOnly) {
    posts = posts.filter((post) => post.featured);
  }

  return typeof options?.limit === "number" ? posts.slice(0, options.limit) : posts;
}

export async function getBlogPost(slug: string) {
  return (await getBlogPosts()).find((post) => post.slug === slug);
}

export async function getServicesByCategory(category: Service["category"]) {
  const services = await fetchSanityCollectionOrFallback<Service>(
    servicesQuery,
    "services",
  );

  return services.filter((service) => service.category === category);
}

export async function getFeaturedTestimonial() {
  const testimonials = await fetchSanityCollectionOrFallback<Testimonial>(
    testimonialsQuery,
    "testimonials",
  );

  return testimonials.find((testimonial) => testimonial.featured) ?? testimonials[0];
}

export async function getTestimonialAvatars() {
  if (isSanityConfigured) {
    try {
      const result = await sanityClient.fetch<{ avatars?: TestimonialAvatar[] }>(
        testimonialAvatarsQuery,
      );

      if (result?.avatars?.length) {
        return result.avatars;
      }
    } catch {
      // Fall back to local seed content below.
    }
  }

  return readJsonFile<{ avatars: TestimonialAvatar[] }>("testimonial-avatars.json").avatars;
}
