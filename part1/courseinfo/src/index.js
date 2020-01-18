import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	console.log(props)
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <p>
            Part {props.exerciseNum}: {props.exerciseName}, {props.exerciseCount} exercises
        </p>
    )
}

const Content = (props) => {
	console.log(props)
	return (
		<div>
            <Part exerciseNum='1' exerciseName={props.part1} exerciseCount={props.exercises1} />
            <Part exerciseNum='2' exerciseName={props.part2} exerciseCount={props.exercises2} />
            <Part exerciseNum='3' exerciseName={props.part3} exerciseCount={props.exercises3} />
        </div>
	)
}


const Total = (props) => {
    console.log(props)
    return(
        <div>
            <p>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
        	<Header course={course}/>
            <Content 
                part1={part1} 
                part2={part2}
                part3={part3}   
                exercises1={exercises1}  
                exercises2={exercises2}  
                exercises3={exercises3}  
            />

            <Total 
                exercises1={exercises1}  
                exercises2={exercises2}  
                exercises3={exercises3}
            />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root')) 