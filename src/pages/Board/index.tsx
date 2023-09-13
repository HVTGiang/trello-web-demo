import BoardContent from './BoardContent'
import BoardHeader from './BoardHeader'
import { mockData } from '~/apis/mock-data'

const Board = () => {
  return (
    <>
      <BoardHeader board={mockData.board} />
      <BoardContent board={mockData.board} />
    </>
  )
}
export default Board
