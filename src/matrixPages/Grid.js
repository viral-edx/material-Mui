/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdDelete, MdKeyboardArrowDown, MdOutlineVerticalSplit } from 'react-icons/md';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import UiContextStructure from '../context/ui-context';
import { IoClose } from 'react-icons/io5';

const Grid = ({ data, itemsPerPage, header = '' }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [searchKey, setSearchKey] = useState('');
  const [toggle, setToggle] = useState(null);
  const [filteredData, setFilteredData] = useState(data || []);
  const [selected, setSelected] = useState([]);
  const [component, setComponent] = useState(false);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef(null);

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
      <div className={`detail-data ${component ? 'clicked' : 'click'}`}>{/* invoice id nested  */}</div>
      <div className={`${component ? 'data-hidden' : 'data-show'}`}>
        <div className={`${toggle === 'vertical' ? 'grid-wrapper-col' : 'grid-wrapper'}`}>
          <div className="grid-header">
            {selected.length > 0 ? <h5>{selected.length} Selected</h5> : <h4>{header}</h4>}
            <div className="grid-header-right">
              {selected.length > 0 && (
                <div className="delete-icon">
                  <MdDelete size={24} />
                </div>
              )}

              <SearchableDropdown dropdownData={filters} searchKey={searchKey} setSearchKey={setSearchKey} />

              <div className="toggle-pane">
                {/* ---split menu for toggle between vertical and horizontal--- */}
                {toggle ? (
                  <MdOutlineVerticalSplit
                    size="25px"
                    onClick={() => {
                      setToggle(null);
                      setDropdown(false);
                    }}
                  />
                ) : (
                  <GiHamburgerMenu
                    size="20px"
                    onClick={() => {
                      setToggle('vertical'); //by default split preview will be vertical
                      setDropdown(false);
                    }}
                  />
                )}

                <div className="arrow-icon">
                  <MdKeyboardArrowDown size={20} onClick={() => setDropdown((prev) => !prev)} />
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
                setComponent={setComponent}
              />
            ) : (
              <div className="no-result">
                <h4>No results to show!</h4>
              </div>
            )}

            {/* ---pagination for total pages--- */}
            <ReactPaginate
              breakLabel="..."
              nextLabel={<IoChevronForward size={16} />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={<IoChevronBack size={16} />}
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
              <SplitData setToggle={setToggle} toggle={toggle} />
            </div>
          )}
          {/* ---vertical split preview ended--- */}
        </div>

        {/* ---vertical split preview started--- */}
        {toggle === 'horizontal' && (
          <div className="full-view">
            <SplitData setToggle={setToggle} toggle={toggle} />
          </div>
        )}
        {/* ---vertical split preview ended--- */}
      </div>
    </>
  );
};

function Items({ currentItems, selected, toggle, setSelected = () => {}, setComponent = () => {} }) {
  const { setSplitData } = useContext(UiContextStructure);
  // const [splitData, setSplitData] = useState(null)

  //multiple row selection and de-selection function
  function handleAllSelection() {
    if (selected.length < currentItems.length) {
      setSelected(currentItems);
    } else {
      setSelected([]);
    }
  }

  //single row selection and de-selection function
  function handleSingleSelection(item) {
    if (selected.includes(item)) {
      let array = [...selected];
      var index = array.indexOf(item);
      if (index !== -1) {
        array.splice(index, 1);
        setSelected(array);
      }
    } else {
      setSelected((prevState) => [...prevState, item]);
    }
  }

  return (
    <div className="table-wrapper">
      <table className="table-container">
        {/* ---table rows header started--- */}
        <tr className="table-row">
          <th>
            <input id="InvoiceId" type="checkbox" checked={selected.length === currentItems.length} onChange={handleAllSelection} />
            <label className="checkbox" htmlFor="InvoiceId"></label>
          </th>
          <th>Invoice Id</th>
          <th>Sender</th>
          <th>Receiver</th>
          <th className="last-col">Date</th>
          <th className="last-col">Total Amount</th>
          <th className="last-col">Status</th>
        </tr>
        {/* ---table rows header ended--- */}

        {/* ---paginated data is mapped here--- */}
        {currentItems.length > 0 &&
          currentItems.map((item, i) => (
            <tr key={i}>
              <td className="table-row">
                <input
                  id={item.invoiceId}
                  type="checkbox"
                  checked={selected.length > 0 && selected.includes(item)}
                  onChange={() => handleSingleSelection(item)}
                />
                <label className="checkbox" htmlFor={item.invoiceId}></label>
              </td>
              <td
                className="table-row"
                onClick={() => {
                  if (!toggle) {
                    //navigate if split preview is not open
                    // navigate(`/invoice/${item.invoiceId}`)
                    setComponent(true);
                  }
                  setSplitData(item);
                }}
              >
                {item.invoiceId}
              </td>
              <td
                className="table-row truncate"
                onClick={() => {
                  if (!toggle) {
                    //navigate if split preview is not open
                    // navigate(`/invoice/${item.invoiceId}`)
                    setComponent(true);
                  }
                  setSplitData(item);
                }}
              >
                <div className="truncate">{item.sender}</div>
              </td>
              <td
                className="table-row truncate"
                onClick={() => {
                  if (!toggle) {
                    //navigate if split preview is not open
                    // navigate(`/invoice/${item.invoiceId}`)
                    setComponent(true);
                  }
                  setSplitData(item);
                }}
              >
                <div className="truncate">{item.receiver}</div>
              </td>
              <td
                className="table-row last-col"
                onClick={() => {
                  if (!toggle) {
                    //navigate if split preview is not open
                    // navigate(`/invoice/${item.invoiceId}`)
                    setComponent(true);
                  }
                  setSplitData(item);
                }}
              >
                {item.date}
              </td>
              <td
                className="table-row last-col"
                onClick={() => {
                  if (!toggle) {
                    //navigate if split preview is not open
                    // navigate(`/invoice/${item.invoiceId}`)
                    setComponent(true);
                  }
                  setSplitData(item);
                }}
              >
                {item.totalAmount}
              </td>
              <td
                className="table-row last-col"
                onClick={() => {
                  if (!toggle) {
                    //navigate if split preview is not open
                    // navigate(`/invoice/${item.invoiceId}`)
                    setComponent(true);
                  }
                  setSplitData(item);
                }}
              >
                {item.status}
              </td>
            </tr>
          ))}
        {/* ---paginated data ended here--- */}
      </table>
    </div>
  );
}

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
          <IoClose />
        </div>
      )}
      <div className="dropdown--arrow" onClick={() => setDropdown((prev) => !prev)}>
        <MdKeyboardArrowDown />
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

const SplitData = ({ setToggle = () => {}, toggle, ...props }) => {
  return (
    <div className={`splitempty ${props.splitRight && 'splitempty-right'}`}>
      <h4>No conversations selected</h4>
      <p>Please select any conversations.</p>
    </div>
  );
};

export default Grid;
