import safeGet from 'lodash/get'

export default {
  title: 'Table Header Row',
  name: 'richTableHeaderRow',
  type: 'object',
  fields: [
    {
      name: 'cells',
      type: 'array',
      of: [{type: 'richTableCell'}],
    },
  ],
  preview: {
    select: {
      cells: 'cells',
    },
    prepare(selection) {
      const {cells} = selection

      if (!cells.length) {
        return {
          title: '<Empty>',
        }
      }
      const txts = []
      for (let idx = 0; idx < cells.length && idx < 5; idx++) {
        const cell = cells[idx]
        const txt = safeGet(cell, 'value') || ' '
        txts.push(txt)
      }
      return {
        title: txts.join(', '),
        subtitle: `size: ${cells.length}`,
      }
    },
  },
}
