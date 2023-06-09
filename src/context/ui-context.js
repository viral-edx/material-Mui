import * as React from 'react';
import { useState } from 'react';
const UiContextStructure = React.createContext({
  toggle: true,
  setToggle: () => {},
  splitData: null,
  setSplitData: () => {}
});
export const UiContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [splitData, setSplitData] = useState(null);

  const data = {
    toggle,
    setToggle,
    splitData,
    setSplitData
  };

  return <UiContextStructure.Provider value={data}>{children}</UiContextStructure.Provider>;
};

export default UiContextStructure;
