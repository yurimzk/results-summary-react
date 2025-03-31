import { Brain, ChatTeardropDots, Eye, Lightning, LightningA } from '@phosphor-icons/react'
import './Summary.scss'

export default function Summary () {
  return (
    <div className='summary-container'>
      <h2>Summary</h2>
      <div className="summary-list">
        <div className='reaction-category'>
          <div className='category-heading'>
            <Lightning />
            <h3>Reaction</h3>
          </div>
          <div className='category-score'>
            <span className='reaction-score'>80</span>
            <p>/ 100</p>
          </div>
        </div>
        <div className='memory-category'>
          <div className='category-heading'>
            <Brain />
            <h3>Memory</h3>
          </div>
          <div className='category-score'>
            <span className='memory-score'>92</span>
            <p>/ 100</p>
          </div>
        </div>
        <div className='verbal-category'>
          <div className='category-heading'>
            <ChatTeardropDots />
            <h3>Verbal</h3>
          </div>
          <div className='category-score'>
            <span className='verbal-scoree'>61</span>
            <p>/ 100</p>
          </div>
        </div>
        <div className='visual-category'>
          <div className="category-heading">
            <Eye />
            <h3>Visual</h3>
          </div>
          <div className='category-score'>
            <span className='visual-score'>73</span>
            <p>/ 100</p>
          </div>
        </div>
      </div>
    </div>
  )
}
