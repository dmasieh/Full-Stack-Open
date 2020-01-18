import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	console.log(props)
    return <h1>{props.course}</h1>
}

const Part = (props) => {
    console.log(props)
    return <p>Part {props.exerciseNum}: {props.exerciseName}, {props.exerciseCount} exercises</p>
}

const Content = (props) => {
	console.log(props)
	return (
		<>
            <Part exerciseNum='1' exerciseName={props.part1} exerciseCount={props.exercises1} />
            <Part exerciseNum='2' exerciseName={props.part2} exerciseCount={props.exercises2} />
            <Part exerciseNum='3' exerciseName={props.part3} exerciseCount={props.exercises3} />
        </>
	)
}


const Total = (props) => {
    console.log(props)
    return <p>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = { name:    'Fundamentals of React', exercises: 10 }
    const part2 = { name: 'Using props to pass data', exercises:  7 }
    const part3 = { name:     'State of a component', exercises: 14 }

    return (
        <div>
        	<Header course={course}/>
            <Content 
                part1={part1.name} part2={part2.name} part3={part3.name}   
                exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}  
            />
            <Total 
                exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root')) 