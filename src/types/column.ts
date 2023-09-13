import { ICard } from './card'

export interface IColumn {
  _id: string
  boardId: string
  title: string
  cardOrderIds: Array<string>
  cards: Array<ICard>
}
