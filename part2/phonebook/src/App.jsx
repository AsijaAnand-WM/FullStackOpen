import { useState } from 'react'
import Display from './Component/Display'
import Add from './Component/Add'
import Filter from './Component/Filter'

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
            <Filter search={search} handleSearch={handleSearch} />
            <Add
                onSubmit={handleSubmit}
                newName={newName}
                newNumber={newNumber}
                handleOnName={handleOnName}
                handleOnNumber={handleOnNumber} />
            <Display persons={persons} search={search}/>
        </div>
    )
}

export default App
