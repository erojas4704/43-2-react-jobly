import { useState } from "react";

const SearchField = ({ onSubmit }) => {
    const [input, setInput] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(input);
    }

    return (
        <form onSubmit={handleSubmit}>
                <input 
                    id="search"
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
    )
}

export default SearchField;