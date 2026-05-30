import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["home", "plumbing", "heating"] },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleLines",
      title: "Title Lines",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "imageUrl",
      title: "External Image URL",
      type: "url",
      description: "Optional fallback for external images.",
    }),
    defineField({
      name: "imagePath",
      title: "Local Image Path",
      type: "string",
      description: "Existing image path from the Next.js public folder.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Image Alt",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "imageClassName",
      title: "Image Class Name",
      type: "string",
      description: "Advanced field for existing object-position utility classes.",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
      validation: (rule) => rule.required(),
    }),
  ],
});
