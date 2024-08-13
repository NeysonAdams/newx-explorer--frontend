import React, {useState} from 'react';
import './SearchForm.css';

const SearchForm = ({onSerch}) => 
{
    const [query, setQuery] = useState('');

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
      };

    const handleSubmit = (event)=>{
        event.preventDefault(); 
        console.log(query);
        onSerch(query);
    }

    return (
        <form className='search-form' 
                onSubmit={handleSubmit}>
            <input 
                onChange={handleQueryChange}
                value={query}
                className='search-form__input' 
                type="text" 
                placeholder='Enter topic' />
            <button 
                className="search-form__submit-button" 
                type="submit">Search</button>
        </form>
    );
}

export default SearchForm;