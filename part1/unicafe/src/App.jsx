import { useState } from 'react'

const Button = ({data, onClick}) => (
    <button onClick={onClick}>
        {data}
    </button>
)

const Stats = ({data, value}) => (
    <div>
        <p>
            {data} {value}
        </p>
    </div>
)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => setGood(good+1)
    const handleNeutral = () => setNeutral(neutral+1)
    const handleBad = () => setBad(bad+1)

    return (
        <div>
            <h1>
                give feedback
            </h1>
            <Button data={'good'} onClick={handleGood} />
            <Button data={'neutral'} onClick={handleNeutral} />
            <Button data={'bad'} onClick={handleBad} />

            <h1>
                statistics
            </h1>
            <Stats data={'good'} value={good}/>
            <Stats data={'neutral'} value={neutral}/>
            <Stats data={'bad'} value={bad}/>
            <p> all {good + neutral + bad} </p>
            <p> average {(good - bad)/(good + neutral + bad)} </p>
            <p> positive {good/(good + neutral + bad) * 100} </p>
        </div>
    )
}

export default App
