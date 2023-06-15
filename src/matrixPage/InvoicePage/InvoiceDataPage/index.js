/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight, Menu, Delete, VerticalSplit } from '@mui/icons-material';
import Items from './Items';
import SearchableDropdown from './SearchableDropdown';
import SplitData from './SplitData';

const InvoiceDataPage = ({ data, itemsPerPage, header = '' }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [searchKey, setSearchKey] = useState('');
  const [toggle, setToggle] = useState(null);
  const [splitData, setSplitData] = useState(null);
  const [filteredData, setFilteredData] = useState(data || []);
  const [selected, setSelected] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef(null);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    setItemOffset(newOffset);
  };

  // re-filter data whenever searckKey or data is changed
  useEffect(() => {
    if (searchKey) {
      const arr = data.filter((index) => {
        const sender = index.sender.toLowerCase();
        return sender.includes(searchKey.toLowerCase());
      });
      setFilteredData(arr);
    } else {
      setFilteredData(data);
    }
  }, [searchKey, data]);

  //closes on outside click of element
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  //dynamic dropdown filters for rows depending upon data
  let filters = [];
  data.filter((item) => !filters.includes(item.sender)).forEach((item) => filters.push(item.sender));

  return (
    <>
      <div className={`${toggle === 'vertical' ? 'grid-wrapper-col' : 'grid-wrapper'}`}>
        <div className="grid-header">
          {selected.length > 0 ? <h2>{selected.length} Selected</h2> : <h2>{header}</h2>}
          <div className="grid-header-right">
            {selected.length > 0 && (
              <div className="delete-icon-grid-page">
                <Delete />
              </div>
            )}

            {/* ---searchable dropdown component started--- */}
            <SearchableDropdown dropdownData={filters} searchKey={searchKey} setSearchKey={setSearchKey} />
            {/* ---searchable dropdown component ended--- */}

            <div className="toggle-pane">
              {/* ---split menu for toggle between vertical and horizontal--- */}
              {toggle ? (
                <VerticalSplit
                  size="25px"
                  onClick={() => {
                    setToggle(null);
                    setDropdown(false);
                  }}
                />
              ) : (
                <Menu
                  size="20px"
                  onClick={() => {
                    setToggle('vertical'); //by default split preview will be vertical
                    setDropdown(false);
                  }}
                />
              )}

              <div className="arrow-icon">
                <KeyboardArrowDown onClick={() => setDropdown((prev) => !prev)} />
              </div>

              {dropdown && (
                <div className="dropdown-arrow-wrapper" ref={ref}>
                  <div
                    onClick={() => {
                      setDropdown(false);
                      setToggle(null);
                    }}
                  >
                    No Split
                  </div>
                  <div
                    onClick={() => {
                      setToggle('vertical');
                      setDropdown(false);
                    }}
                  >
                    Vertical Split
                  </div>
                  <div
                    onClick={() => {
                      setToggle('horizontal');
                      setDropdown(false);
                    }}
                  >
                    Horizontal Split
                  </div>
                </div>
              )}
              {/* ---split menu ended--- */}
            </div>
          </div>
        </div>
        <div className="display-view">
          {/* ---items after filteration and pagination--- */}
          {currentItems.length > 0 ? (
            <Items
              currentItems={currentItems}
              selected={selected}
              setSelected={setSelected}
              toggle={toggle}
              setSplitData={setSplitData}
              setToggle={setToggle}
            />
          ) : (
            <div className="no-result">
              <h4>No results to show!</h4>
            </div>
          )}

          {/* ---pagination for total pages--- */}
          <ReactPaginate
            breakLabel="..."
            nextLabel={<KeyboardArrowRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<KeyboardArrowLeft />}
            renderOnZeroPageCount={null}
            className="pagination"
            pageLinkClassName="pagination-link"
            activeLinkClassName="pagination-activelink"
            previousLinkClassName="pagination-previouslink"
            nextLinkClassName="pagination-nextlink"
          />
        </div>
        {/* ---vertical split preview started--- */}
        {toggle === 'vertical' && (
          <div className={`side-view ${toggle === 'vertical' ? 'active' : 'non-active'}`}>
            <SplitData setToggle={setToggle} toggle={toggle} splitData={splitData} />
          </div>
        )}
        {/* ---vertical split preview ended--- */}
      </div>

      {/* ---vertical split preview started--- */}
      {toggle === 'horizontal' && (
        <div className={`full-view ${toggle === 'horizontal' ? 'active' : 'non-active'}`}>
          <SplitData setToggle={setToggle} toggle={toggle} splitData={splitData} />
        </div>
      )}
      {/* ---vertical split preview ended--- */}
    </>
  );
};

export default InvoiceDataPage;
