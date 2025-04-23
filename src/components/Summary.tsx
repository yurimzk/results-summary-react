import { Brain, ChatTeardropDots, Eye, Lightning } from '@phosphor-icons/react'
import './Summary.scss'

export default function Summary () {
  return (
    <section className='summary-container'>
      <h2>Summary</h2>
      <div className="summary-list">
        <div className='reaction-category'>
          <div className='category-heading'>
            <Lightning className='reaction-icon' />
            <h3 className='reaction-heading'>Reaction</h3>
          </div>
          <div className='category-score'>
            <span className='reaction-score'>80</span>
            <div>/</div>
            <p>100</p>
          </div>
        </div>
        <div className='memory-category'>
          <div className='category-heading'>
            <Brain className='memory-icon' />
            <h3 className='memory-heading'>Memory</h3>
          </div>
          <div className='category-score'>
            <span className='memory-score'>92</span>
            <div>/</div>
            <p>100</p>
          </div>
        </div>
        <div className='verbal-category'>
          <div className='category-heading'>
            <ChatTeardropDots className='verbal-icon' />
            <h3 className='verbal-heading'>Verbal</h3>
          </div>
          <div className='category-score'>
            <span className='verbal-scoree'>61</span>
            <div>/</div>
            <p>100</p>
          </div>
        </div>
        <div className='visual-category'>
          <div className="category-heading">
            <Eye className='visual-icon' />
            <h3 className='visual-heading'>Visual</h3>
          </div>
          <div className='category-score'>
            <span className='visual-score'>73</span>
            <div>/</div>
            <p>100</p>
          </div>
        </div>
      </div>
      <button className='continue-btn'>Continue</button>
    </section>
  )
}
