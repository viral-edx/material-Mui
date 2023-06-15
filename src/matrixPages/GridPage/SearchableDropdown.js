/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { Clear, KeyboardArrowDown } from '@mui/icons-material';

const SearchableDropdown = ({ dropdownData, setSearchKey, searchKey }) => {
  const [dropdown, setDropdown] = useState(false);
  const [filtered, setFiltered] = useState(dropdownData || []);
  const searchOptionsRef = useRef(null);

  useEffect(() => {
    if (searchKey.length > 0) {
      const arr = dropdownData.filter((index) => {
        const text = index.toLowerCase();
        return text.includes(searchKey.toLowerCase());
      });
      setFiltered(arr);
    } else {
      setFiltered(dropdownData);
    }
  }, [searchKey, dropdownData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchOptionsRef.current && !searchOptionsRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <form className="searchable-dropdown">
      {/* ---searchable input--- */}
      <input
        className="search-input"
        placeholder="Search here..."
        value={searchKey}
        onChange={(e) => {
          setDropdown(true);
          setSearchKey(e.target.value);
        }}
      />
      {searchKey.length > 0 && (
        <div onClick={() => setSearchKey('')}>
          <Clear />
        </div>
      )}
      <div className="dropdown--arrow" onClick={() => setDropdown((prev) => !prev)}>
        <KeyboardArrowDown />
      </div>

      {/* ---searchable dropdown--- */}
      {dropdown && filtered.length > 0 && (
        <div className="search-dropdown-wrapper" ref={searchOptionsRef}>
          {filtered.map((index, i) => (
            <div
              key={i}
              className="search-dropdown"
              onClick={() => {
                setDropdown(false);
                setSearchKey(index);
              }}
            >
              <span>{index}</span>
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchableDropdown;
