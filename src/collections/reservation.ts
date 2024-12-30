import type { CollectionConfig } from 'payload'

export const Reservation: CollectionConfig = {
  slug: 'reservation',
  labels: {
    plural: 'reservation',
    singular: 'reservation',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'nama',
      label: 'Nama',
      type: 'text',
      required: true,
    },
    {
      name: 'kehadiran',
      label: 'Kehandiran',
      type: 'text',
      required: true,
    },
    {
      name: 'ucapan',
      label: 'Ucapan',
      type: 'text',
      required: true,
    },
  ],
}
