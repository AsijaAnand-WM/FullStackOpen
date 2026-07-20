const Filter = ({search, handleSearch}) => {
    return (
        <div>
            <h2>Filter show with</h2>
            <input value={search} onChange={handleSearch}/>
            <br />
            <br />
        </div>
    )
}

export default Filter
