import { useState, useEffect } from 'react'
import connect from './Services/quake.js'
import Display from './Component/Display'
import Add from './Component/Add'
import Filter from './Component/Filter'

const App = () => {
    const [persons, setPersons] = useState([]) 
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        connect
            .afetchd()
            .then(data => setPersons(data))
    }, [])

    const check = () => {
        if(persons.some(p => p.name === newName)){
            if(persons.some(p => p.number === newNumber)){
                return 2
            }
            return 1
        }
        return 0
    }

    const handleDel = (id) => {
        const name = persons.find(p => p.id === id).name
        if(!window.confirm(`Delete ${name}?`)) return
        connect
            .adeld(id)
            .then(() => {
                const arrAfterDel = persons.filter(
                    person =>
                        person.id !== id
                )
                setPersons(arrAfterDel)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()


        if(check() === 2) {
            alert(`'${newName}' is already added to phonebook`)
        }
        else if(check() === 1) {
            if(!window.confirm(`Update contact of ${newName}?`)) return
            const person = persons.find(p => p.name === newName)
            connect
                .aputd(person, newNumber)
                .then(data => {
                    setPersons(persons.map(
                        person => (
                            person.name === newName ? data : person
                        ))
                    )
                    setNewName('')
                    setNewNumber('')
                })
        }
        else {
            connect
                .apostd(newName, newNumber)
                .then(data => {
                    setPersons(orig => orig.concat(data))
                    setNewName('')
                    setNewNumber('')
                })
        }
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
            <Display
                persons={persons}
                search={search}
                handleDel={handleDel}/>
        </div>
    )
}

export default App
