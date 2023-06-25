import { useEffect, useState } from "react"
import axios from "axios";
import ListView from "./ListView";
import Search from "./Search";

const Gallery = () => {
    const [data, setData] = useState(null);
    const [searchResults, setSearchResults] = useState(null)
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        const url = " https://reqres.in/api/users?page=2";
        axios.get(url)
        .then(json => { setData(json.data.data); setSearchResults(json.data.data); })
        .catch(err => console.log("Error occurred", err));
    }, []);

    const handleChange = (e) => {
        const text = e.target.value;
        setSearchText(text);
        const results = data.filter(item => item.first_name.toLowerCase().includes(text.toLowerCase()));
        setSearchResults(results);
    }

    return (
        <>
            {
                data === null ?
                    "Wait Till the page gets loaded!!" :
                    <>
                        <Search text={searchText} handleChange={handleChange} />
                        <ListView items={searchResults} />
                    </>
            }
        </>
    )
}

export default Gallery;
