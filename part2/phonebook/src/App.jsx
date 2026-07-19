import { useState } from 'react'

const Display = ({persons, search}) => {
    if(search === '')
        return (
            <div>
                <h2>Numbers</h2>
                {persons.map(
                    person =>
                    <p key={person.number + person.name}>
                    {person.name} {person.number}
                    </p>
                )}
            </div>
        )
    const filtered = persons.filter(person => 
        person.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div>
            <h2> Filtered </h2>
            {filtered.map(
                person =>
                <p key={person.number + person.name}>
                {person.name} {person.number}
                </p>
            )}
        </div>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        { 
            name: 'Arto Hellas',
            number: '00-99999-99999'
        },
    ]) 
    const [newName, setNewName] = useState('Add Number')
    const [newNumber, setNewNumber] = useState('00-00000-00000')
    const [search, setSearch] = useState('')

    const check = () => {
        for(let i = 0; i < persons.length; i++){
            if(newName === persons[i].name && newNumber === persons[i].number) return true
        }
        return false
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(check()) alert(`'${newName}' is already added to phonebook`)
        else{
            setPersons(persons.concat(
                {
                    name: newName,
                    number: newNumber
                }
            ))
        }
        setNewName('Add Number')
    }
    
    const handleSearch = (event) => setSearch(event.target.value)
    const handleOnName = (event) => setNewName(event.target.value)
    const handleOnNumber = (event) => setNewNumber(event.target.value)

    return (
        <div>
            <h1>Phonebook</h1>
            <br />
            <h2>filter show with</h2>
            <input value={search} onChange={handleSearch}/>
            <br />
            <br />
            <h2>Add a new</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={handleOnName}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleOnNumber}/>
                </div>

                <div>
                <button type="submit">add</button>
                </div>
            </form>
            <br />
            <Display persons={persons} search={search}/>
        </div>
    )
}

export default App
