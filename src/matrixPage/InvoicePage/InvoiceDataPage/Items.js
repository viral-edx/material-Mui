/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router';

const Items = ({ currentItems, selected, setSelected = () => {}, setSplitData, setToggle }) => {
  const navigate = useNavigate();

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
          currentItems.map((item) => (
            <tr
              key={item.invoiceId}
              onDoubleClick={() => {
                navigate(`/matrix-invoice/${item.invoiceId}`);
                setSplitData(item);
              }}
              onClick={() => {
                setToggle('vertical');
                setSplitData(item);
              }}
            >
              <td className="table-row">
                <input
                  id={item.invoiceId}
                  type="checkbox"
                  checked={selected.length > 0 && selected.includes(item)}
                  onChange={() => handleSingleSelection(item)}
                />
                <label className="checkbox" htmlFor={item.invoiceId}></label>
              </td>
              <td className="table-row">{item.invoiceId}</td>
              <td className="table-row truncate">
                <div className="truncate">{item.sender}</div>
              </td>
              <td className="table-row truncate">
                <div className="truncate">{item.receiver}</div>
              </td>
              <td className="table-row last-col">{item.date}</td>
              <td className="table-row last-col">{item.totalAmount}</td>
              <td className="table-row last-col">{item.status}</td>
            </tr>
          ))}
        {/* ---paginated data ended here--- */}
      </table>
    </div>
  );
};

export default Items;
