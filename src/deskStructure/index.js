import S from "@sanity/desk-tool/structure-builder"
import posts from "./posts"

export default () => S.list().title('Flush Sync').items([
  posts,
])