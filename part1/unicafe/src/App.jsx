import { useState } from 'react'

const Button = ({data, onClick}) => (
    <button onClick={onClick}> {data} </button>
)

const StatisticLine = ({data, value}) => (
    <tr>
        <td> {data} </td>
        <td> {value} </td>
    </tr>
)

const Statistics = ({good, neutral, bad}) => {
    if((good + neutral + bad) === 0){
        return (
            <p> No feedback given </p>
        )
    }
    return (
        <table>
        <tbody>
            <StatisticLine data='good'     value={good} />
            <StatisticLine data='neutral'  value={neutral} />
            <StatisticLine data='bad'      value={bad} />
            <StatisticLine data='all'      value={good + neutral + bad} />
            <StatisticLine data='average'  value={(good - bad)/(good + neutral + bad)} />
            <StatisticLine data='positive' value={good/(good + neutral + bad) * 100} />
        </tbody>
        </table>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => setGood(good+1)
    const handleNeutral = () => setNeutral(neutral+1)
    const handleBad = () => setBad(bad+1)

    return (
        <div>
            <h1> give feedback </h1>
            <Button data={'good'} onClick={handleGood} />
            <Button data={'neutral'} onClick={handleNeutral} />
            <Button data={'bad'} onClick={handleBad} />

            <h1> statistics </h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App
