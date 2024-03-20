import { definePathname } from '@tinloof/sanity-studio'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    definePathname({ name: 'pathname' }),
    defineField({
      name: 'portableText',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
})
