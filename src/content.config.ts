import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Routines', 'Reviews', 'Ingredients', 'Guides']),
    kicker: z.string().optional(),
    author: z.string().default('Min-seo Park'),
    pubDate: z.coerce.date(),
    readMinutes: z.number(),
    thumb: z.enum(['t1', 't2', 't3', 't4', 't5', 't6']).default('t1'),
    hangul: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
