import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Refactored button into a component to be 
// called later, as done earlier in the lesson
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  	// save clicks of each button to own state
  	const [good, setGood] = useState(0)
  	const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const total = good + bad + neutral  

  	return (
    	<div>
			<h3>Give Feedback</h3>
			<Button text='Good' onClick={() => setGood(good + 1)} />
			<Button text='Neutral' onClick={() => setNeutral(neutral+ 1)} />
			<Button text='Bad' onClick={() => setBad(bad + 1)} />
			<h3>statistics</h3>		    		
			<p>Good votes: {good}</p>
			<p>Neutral votes: {neutral}</p>
			<p>Bad votes: {bad}</p>
            <p>All Votes: {total}</p>
            <p>Average Votes: {(good + bad * -1) / total}</p>
            <p>Percent Positive: {(good / total) * 100}%</p>
		</div>
  	)
}

ReactDOM.render(<App />, document.getElementById('root')); 