const Header = (props) => {
    return <h1>{props.course}</h1>
}

const Part = (props) => {
    return (
        <>
            <p>{props.part.part} {props.part.ex}</p>  
        </>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part = {props.part_data[0]} />
            <Part part = {props.part_data[1]} />
            <Part part = {props.part_data[2]} />
        </div>
    ) 
}

const Total = (props) => {
    return <p>Number of exercises {props.total}</p> 
}

const App = () => {
  const course = 'Half Stack application development'
  const part_data = [
      { part: 'Fundamentals of React', ex: 10},
      { part: 'Using props to pass data', ex: 7},
      { part: 'State of a component', ex: 14},
  ]

  return (
    <div>
        <Header course = {course} />
        <Content part_data = {part_data} />
        <Total total = { part_data[0].ex + part_data[1].ex + part_data[2].ex } />
    </div>
  )
}

export default App
