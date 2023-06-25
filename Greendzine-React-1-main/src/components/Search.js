import "../styles/Search.scss";

const Search = ({ text, handleChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter the first name to search..."
                value={text}
                onChange={handleChange} />
        </div>
    )
}

export default Search;
