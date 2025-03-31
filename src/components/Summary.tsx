import { Brain, ChatTeardropDots, Eye, Lightning, LightningA } from '@phosphor-icons/react'
import './Summary.scss'

export default function Summary () {
  return (
    <div className='summary-container'>
      <h2>Summary</h2>
      <div className="summary-list">
        <div className='reaction-category'>
          <Lightning />
        </div>
        <div className='memory-category'>
          <Brain />
        </div>
        <div className='verbal-category'>
          <ChatTeardropDots />
        </div>
        <div className='visual-category'>
          <Eye />
        </div>
      </div>
    </div>
  )
}
