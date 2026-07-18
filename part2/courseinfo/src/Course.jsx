const Course = ({ course }) => {
    return (
        <div>
            <h2> {course.name} </h2>
            {course.parts.map(
                part =>
                <p key={part.id}>{part.name} {part.exercises}</p>
            )}
            <h4>total of {course.parts.reduce(
                (acc, crr) => acc + crr.exercises,
                0
            )} exercises</h4>
            <br />
        </div>
    )
}

export default Course
