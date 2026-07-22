const Add = ({onSubmit, newName, newNumber, handleName, handleNumber}) => {
    return (
        <div className='form-group'>
            <legend>Add a new</legend>
            <form onSubmit={onSubmit}>
                <div>
                    name: <input
                                value={newName}
                                onChange={handleName} 
                                placeholder='John Doe'/>
                </div>
                <div>
                    num : <input
                                value={newNumber}
                                onChange={handleNumber}
                                placeholder='00-00000-00000'/>
                </div>

                <div>
                <button type="submit" className='btn btn-default'>
                    add
                </button>
                </div>
            </form>
            <br />
        </div>
    )
}

export default Add
