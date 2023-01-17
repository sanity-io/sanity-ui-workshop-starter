import {defineType} from 'sanity'

const testType = defineType({
  type: 'document',
  name: 'test',
  title: 'Test',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
  ],
})

export const schema = {types: [testType]}
