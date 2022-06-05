// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import post from "./post"
import richTable from "./table/table"
import blockContent from "./blockContent"
import headerRow from "./table/headerRow"
import row from "./table/row"
import cell from "./table/cell"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, richTable, blockContent, cell, row, headerRow]),
})
