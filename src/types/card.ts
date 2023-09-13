export interface ICard {
  _id: string
  boardId: string
  columnId: string
  title: string
  description: string | null
  cover: string | null
  memberIds: Array<string>
  comments: Array<string>
  attachments: Array<string>
}
