import { useState, useEffect } from 'react'
import connect from './Services/quake.js'
import Display from './Component/Display'
import Add from './Component/Add'
import Filter from './Component/Filter'
import Info from './Component/Info'

const App = () => {
    const [persons, setPersons] = useState([]) 
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')
    const [info, setInfo] = useState({
        data:'',
        name:''
    })

    useEffect(() => {
        connect
            .afetchd()
            .then(data => setPersons(data))
    }, [])

    const check = () => {
        const person = persons.find(p => p.name === newName)
        if(person){
            if(person.number === newNumber){
                return 2
            }
            return 1
        }
        return 0
    }

    const infoHandler = (data, name) => {
        setInfo({ data, name })
        setTimeout(() => {
            setInfo({ data: '', name: '' })
        },2000)
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
                infoHandler('del', name)
            })
            .catch(err => {
                infoHandler('error', err)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const isThere = check()
        const clearNew = () => {
            setNewName('')
            setNewNumber('')
        }

        if(isThere === 2) {
            // alert(`'${newName}' is already added to phonebook`)
            infoHandler('error', 'Already There')
            clearNew()
        }
        else if(isThere === 1) {
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
                    infoHandler('mod', newName)
                    clearNew()
                })
                .catch(err => {
                    infoHandler('error', err)
                })
        }
        else {
            connect
                .apostd(newName, newNumber)
                .then(data => {
                    setPersons(orig => orig.concat(data))
                    infoHandler('add', newName)
                    clearNew()
                })
                .catch(err => {
                    infoHandler('error', err)
                })
        }
    }

    const handleSearch = (event) => setSearch(event.target.value)
    const handleName   = (event) => setNewName(event.target.value)
    const handleNumber = (event) => setNewNumber(event.target.value)

    return (
        <div>
            <h1 className='terminal'>Phonebook</h1>
            <Filter
                search={search}
                handleSearch={handleSearch} />
            <Add
                onSubmit={handleSubmit}
                newName={newName}
                newNumber={newNumber}
                handleName={handleName}
                handleNumber={handleNumber} />
            <Display
                persons={persons}
                search={search}
                handleDel={handleDel} />
            <Info data={info.data} name={info.name} search={search}/>
        </div>
    )
}

export default App
