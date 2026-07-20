import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './Component/Display'
import Add from './Component/Add'
import Filter from './Component/Filter'

const App = () => {
    const [persons, setPersons] = useState([]) 
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then((response) => {
                console.log('got it')
                setPersons(response.data)
            })
    }, [])

    const check = () => (
        persons.some(
            person =>
                person.name === newName &&
                person.number === newNumber
        )
    )

    const handleSubmit = (event) => {
        event.preventDefault()

        if(check()) {
            alert(`'${newName}' is already added to phonebook`)
            return
        }
        setPersons(prev =>
            prev.concat({
                name: newName,
                number: newNumber
            })
        )

        setNewName('')
        setNewNumber('')
    }

    const handleSearch = (event) => setSearch(event.target.value)
    const handleName   = (event) => setNewName(event.target.value)
    const handleNumber = (event) => setNewNumber(event.target.value)

    return (
        <div>
            <h1>Phonebook</h1>
            <br />
            <Filter search={search} handleSearch={handleSearch} />
            <Add
                onSubmit={handleSubmit}
                newName={newName}
                newNumber={newNumber}
                handleName={handleName}
                handleNumber={handleNumber} />
            <Display persons={persons} search={search}/>
        </div>
    )
}

export default App
