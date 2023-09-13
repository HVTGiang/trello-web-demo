import { IColumn } from './column'

export interface IBoard {
  _id: string
  title: string
  description: string
  type: 'public' | 'private'
  ownerIds: Array<string>
  memberIds: Array<string>
  columnOrderIds: Array<string>
  columns: Array<IColumn>
}
