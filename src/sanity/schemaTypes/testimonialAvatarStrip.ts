import { defineField, defineType } from "sanity";

export const testimonialAvatarStripType = defineType({
  name: "testimonialAvatarStrip",
  title: "Testimonial Avatar Strip",
  type: "document",
  fields: [
    defineField({
      name: "avatars",
      title: "Avatars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "image", title: "Image", type: "image" }),
            defineField({ name: "src", title: "External Image URL", type: "url" }),
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
          ],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
});
