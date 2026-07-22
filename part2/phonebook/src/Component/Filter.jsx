const Filter = ({search, handleSearch}) => {
    return (
        <div>
            <h2>Filter show with</h2>
            <input value={search} onChange={handleSearch}/>
        </div>
    )
}

export default Filter
