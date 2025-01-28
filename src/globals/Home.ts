import type { GlobalConfig } from 'payload'

export const HomeMedia: GlobalConfig = {
  slug: 'page-media',
  label: 'Page Media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'desktop',
      label: 'Desktop',
      type: 'group',
      fields: [
        {
          name: 'bacground',
          label: 'Background',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'header',
          label: 'Header',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'footer',
          label: 'Footer',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'opening',
      label: 'Opening',
      type: 'group',
      fields: [
        {
          name: 'bacground',
          label: 'Background',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'header',
          label: 'Header',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'footer',
          label: 'Footer',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'pageone',
      label: 'Page One',
      type: 'group',
      fields: [
        {
          name: 'bacground',
          label: 'Background',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'header',
          label: 'Header',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'bgtext',
          label: 'Background Text',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'pagetwo',
      label: 'Page Two',
      type: 'group',
      fields: [
        {
          name: 'bacground',
          label: 'Background',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'header',
          label: 'Header',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'male',
          label: 'Male',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'female',
          label: 'Female',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'footer',
          label: 'Footer',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'pagethree',
      label: 'Page Three',
      type: 'group',
      fields: [
        {
          name: 'bacground',
          label: 'Background',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'header',
          label: 'Header',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'bgtext',
          label: 'Background Text',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'footer',
          label: 'Footer',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'pagetfour',
      label: 'Page Four',
      type: 'group',
      fields: [
        {
          name: 'bacground',
          label: 'Background',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'header',
          label: 'Header',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'footer',
          label: 'Footer',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'pagefive',
      label: 'Page Five',
      type: 'group',
      fields: [
        {
          name: 'bacground',
          label: 'Background',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'header',
          label: 'Header',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'glimpseofus',
          label: 'Glimpse Of Us',
          type: 'array',
          fields: [
            {
              name: 'image',
              label: 'Image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          name: 'footer',
          label: 'Footer',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'pagesix',
      label: 'Page Six',
      type: 'group',
      fields: [
        {
          name: 'bacground',
          label: 'Background',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'header',
          label: 'Header',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'footer',
          label: 'Footer',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'pageseven',
      label: 'Page Seven',
      type: 'group',
      fields: [
        {
          name: 'bacground',
          label: 'Background',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'header',
          label: 'Header',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'footer',
          label: 'Footer',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
