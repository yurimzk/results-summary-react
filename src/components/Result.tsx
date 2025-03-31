import './Result.scss'

export default function Result() {
  return (
    <div className='result-container'>
      <h2>Your Result</h2>
      <div className="score-container">
        <div className="score">
          <span>76</span>
          <span>of 100</span>
        </div>
        <div className="result-text">
          <h3>Great</h3>
          <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>
    </div>
  )
}
