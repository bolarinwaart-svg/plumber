import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"] | order(_updatedAt desc)[0] {
    brandName,
    companyName,
    metadata {
      title,
      description
    },
    contact {
      email,
      label
    },
    navItems[] {
      label,
      href
    },
    footer {
      headline,
      enquiryCopy,
      privacyCopy,
      legalLinks,
      socialLinks
    }
  }
`;

export const blogPostsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)] | order(order asc) {
    "slug": slug.current,
    title,
    excerpt,
    category,
    readTime,
    "image": coalesce(image.asset->url, imageUrl, imagePath),
    alt,
    "featured": coalesce(featured, false),
    "order": coalesce(order, 0)
  }
`;

export const servicesQuery = groq`
  *[_type == "service" && defined(slug.current)] | order(order asc) {
    "slug": slug.current,
    category,
    title,
    "titleLines": coalesce(titleLines, []),
    description,
    "image": coalesce(image.asset->url, imageUrl, imagePath),
    alt,
    imageClassName,
    "order": coalesce(order, 0)
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial" && defined(slug.current)] | order(order asc) {
    "slug": slug.current,
    name,
    title,
    rating,
    "image": coalesce(image.asset->url, imageUrl, imagePath),
    alt,
    "quoteLines": coalesce(quoteLines, []),
    "featured": coalesce(featured, false),
    "order": coalesce(order, 0)
  }
`;

export const testimonialAvatarsQuery = groq`
  *[_type == "testimonialAvatarStrip"] | order(_updatedAt desc)[0] {
    avatars[] {
      "src": coalesce(image.asset->url, src, imagePath),
      alt
    }
  }
`;
