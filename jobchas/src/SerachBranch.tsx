import { useId } from 'react';
import { useState } from 'react';

export function SearchField() {
  const ageInputId = useId();
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log('Search value:', searchValue);
  };
  {
    console.log('Generated ID:', ageInputId);
  }

  return (
    <div className='search-card'>
      <form onSubmit={handleSearch}>
        <label htmlFor={ageInputId}></label>
        <input
          id={ageInputId}
          name='search-input'
          type='text'
          placeholder='Sökelisök'
          // defaultValue='Sökelisök'
          value={searchValue}
          onChange={handleInputChange}
        />
        <SearchBtn />
      </form>

      <div className='tag-btn-container'>
        <div className='tag-btn'>tag1</div>
        <div className='tag-btn'>tag1</div>
      </div>
    </div>
  );
}

function SearchBtn() {
  return (
    <div>
      <button type='submit'>
        🔎 Sök
      </button>
    </div>
  );
}


