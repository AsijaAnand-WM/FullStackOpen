const Add = ({onSubmit, newName, newNumber, handleOnName, handleOnNumber}) => {
    return (
        <div>
            <h2>Add a new</h2>
            <form onSubmit={onSubmit}>
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
        </div>
    )
}

export default Add
