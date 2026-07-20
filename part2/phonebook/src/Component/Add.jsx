const Add = ({onSubmit, newName, newNumber, handleName, handleNumber}) => {
    return (
        <div>
            <h2>Add a new</h2>
            <form onSubmit={onSubmit}>
                <div>
                    name: <input
                                value={newName}
                                onChange={handleName} 
                                placeholder='John Doe'/>
                </div>
                <div>
                    number: <input
                                value={newNumber}
                                onChange={handleNumber}
                                placeholder='00-00000-00000'/>
                </div>

                <div>
                <button type="submit">add</button>
                </div>
            </form>
            <br />
        </div>
    )
}

export default Add
