import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Refactored button into a component to be called later
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistic = ({ category, count }) => <tr><td>{category}</td><td>{count}</td></tr>

// create a separate component for the statistics
const Statistics = ({ good, bad, neutral }) => {
    const total = good + bad + neutral

    // conditionally display statistics based on feedback given
    if(good >= 1 && (neutral + bad === 0)){
        return (
            <table border="1">
				<tbody>
                    <Statistic category='Good Votes' count={good} />
                    <tr><td colSpan="2">
                        So far, there's only Good Votes, a vote <br />
                        average of 1 and Positive Feedback!
                    </td></tr>
                </tbody>
            </table>
        )
    } else if(total === 0) {
        return <h1>No Feedback Given Yet</h1>
    } else {
        return (
            <table border="1">
				<tbody>
                    <Statistic category='Good Votes' count={good} />
                    <Statistic category='Neutral Votes' count={neutral} />
                    <Statistic category='Bad Votes' count={bad} />
                    <Statistic category='Total Votes' count={total} />
                    <Statistic category='Average Votes' count={(good + bad * -1) / total} />
                    <Statistic category='% of Positive Feedback' count={((good / total) * 100) +'%'} />
                </tbody>
            </table>
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