const Header = ({ name }) => {
    return <h1>{ name }</h1>
}

const Part = ({ part }) => {
    return (
        <>
            <p>{ part.part } { part.ex }</p>  
        </>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            <Part part = { parts[0] } />
            <Part part = { parts[1] } />
            <Part part = { parts[2] } />
        </div>
    ) 
}

const Total = ({ parts }) => {
    return <p>Number of exercises { parts[0].ex + parts[1].ex + parts[2].ex }</p> 
}

const App = () => {
    const course = {
        name : 'Half Stack application development',
        parts : [
            { part: 'Fundamentals of React', ex: 10 },
            { part: 'Using props to pass data', ex: 7 },
            { part: 'State of a component', ex: 14 },
        ]
    }

    return (
        <div>
            <Header name={ course.name } />
            <Content parts={ course.parts } />
            <Total parts={ course.parts } />
        </div>
    )
}

export default App
