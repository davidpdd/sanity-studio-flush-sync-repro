import RowsInput from './../../src/customInputs/table/rows-input'

export default {
  title: 'Table',
  name: 'richTable',
  type: 'object',
  options: {
    modal: {
      type: 'fullscreen',
    },
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title (internal)',
    },
    {
      name: 'rows',
      title: 'Table Rows',
      type: 'array',
      of: [
        {type: 'richTableRow'},
      ],
      inputComponent: RowsInput,
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
