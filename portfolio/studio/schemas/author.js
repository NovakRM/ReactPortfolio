export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: []
        }
      ]
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}
      ]
    },
    {
      name: 'authorSkills',
      title: 'Author Skills',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          lists: [{title: 'Bullet', value: 'bullet'}]
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}