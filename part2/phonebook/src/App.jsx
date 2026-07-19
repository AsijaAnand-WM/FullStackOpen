import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' },
        { name: 'Ada Lovelace' }
    ]) 
    const [newName, setNewName] = useState('Add Number')

    const check = () => {
        for(let i = 0; i < persons.length; i++){
            if(newName === persons[i].name) return true
        }
        return false
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(check()) alert(`'${newName}' is already added to phonebook`)
        else{
            setPersons(persons.concat(
                {name: newName}
            ))
        }
        setNewName('Add Number')
    }
    const handleOnChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={handleOnChange}/>
                </div>

                <div>
                <button type="submit">add</button>
                </div>
            </form>
            <br />
            <h2>Numbers</h2>
            {persons.map(
                person =>
                <p key={person.name}>
                    {person.name}
                </p>
            )}
        </div>
    )
}

export default App
