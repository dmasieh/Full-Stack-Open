import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Refactored button into a component to be called later
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

// create a separate component for the statistics
const Statistics = ({ good, bad, neutral }) => {
    const total = good + bad + neutral

    // conditionally display statistics based on feedback given
    if(good >= 1 && (neutral + bad === 0)){
        return (
            <>	
				<p>Good Votes: {good}</p>
				<p>So far, there's only Good Votes, a vote average of 1 and Positive Feedback!</p>
            </>
        )
    } else if(total === 0) {
        return <h1>No Feedback Given Yet</h1>
    } else {
        return (
            <>
                <p>Good votes: {good}</p>
                <p>Neutral votes: {neutral}</p>
                <p>Bad votes: {bad}</p>
                <p>All Votes: {total}</p>
                <p>Average Votes: {(good + bad * -1) / total}</p>
                <p>Percent Positive: {(good / total) * 100}%</p>
            </>
        )
    }
}

const App = () => {
  	// save clicks of each button to own state
  	const [good, setGood] = useState(0)
  	const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

  	return (
    	<div>
			<h3>Give Feedback</h3>
			<Button text='Good' onClick={() => setGood(good + 1)} />
			<Button text='Neutral' onClick={() => setNeutral(neutral+ 1)} />
			<Button text='Bad' onClick={() => setBad(bad + 1)} />
			<h3>Vote Statistics!</h3>		    		
			<Statistics good={good} bad={bad} neutral={neutral} />
		</div>
  	)
}

ReactDOM.render(<App />, document.getElementById('root')); 