const Display = ({persons, search, handleDel}) => {
    if(search === '')
        return (
            <div>
                <h2>Numbers</h2>
                {persons.map(
                    person =>
                    <p key={person.number + person.name}>
                    <button onClick={() => handleDel(person.id)} className='btn btn-error'>
                        Del
                    </button> 
                    {" " + person.name} {person.number}
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

export default Display
