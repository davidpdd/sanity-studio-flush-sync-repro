import S from "@sanity/desk-tool/structure-builder"

export default S.listItem()
  .title("Posts")
  .schemaType("post")
  .child(S.documentTypeList('post').title('Posts'))
