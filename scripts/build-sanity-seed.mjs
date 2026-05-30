import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentRoot = path.join(root, "content");
const outputPath = path.join(root, "sanity-seed.json");

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(contentRoot, relativePath), "utf8"));
}

function readCollection(relativePath) {
  return fs
    .readdirSync(path.join(contentRoot, relativePath))
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => readJson(path.join(relativePath, fileName)))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

function slug(value) {
  return { _type: "slug", current: value };
}

function withImagePath(item) {
  const { image, ...rest } = item;
  return { ...rest, imagePath: image };
}

const siteSettings = {
  _id: "siteSettings.main",
  _type: "siteSettings",
  ...readJson("site.json"),
};

const blogPosts = readCollection("blog").map((post) => ({
  _id: `blogPost.${post.slug}`,
  _type: "blogPost",
  ...withImagePath(post),
  slug: slug(post.slug),
}));

const services = readCollection("services").map((service) => ({
  _id: `service.${service.slug}`,
  _type: "service",
  ...withImagePath(service),
  slug: slug(service.slug),
}));

const testimonials = readCollection("testimonials").map((testimonial) => ({
  _id: `testimonial.${testimonial.slug}`,
  _type: "testimonial",
  ...withImagePath(testimonial),
  slug: slug(testimonial.slug),
}));

const testimonialAvatarStrip = {
  _id: "testimonialAvatarStrip.main",
  _type: "testimonialAvatarStrip",
  avatars: readJson("testimonial-avatars.json").avatars.map((avatar) => ({
    _key: avatar.src.replace(/[^a-zA-Z0-9]/g, ""),
    alt: avatar.alt,
    imagePath: avatar.src,
  })),
};

const documents = [
  siteSettings,
  ...blogPosts,
  ...services,
  ...testimonials,
  testimonialAvatarStrip,
];

fs.writeFileSync(outputPath, `${JSON.stringify(documents, null, 2)}\n`);
console.log(`Wrote ${documents.length} documents to ${outputPath}`);
