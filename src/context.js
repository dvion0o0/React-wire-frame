import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [time, setTime] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [clicked, setClicked] = useState([]);

  const getTime = () => {
    const time = new Date();
    const currenTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    console.log(currenTime);
    setTime(currenTime);
  };

  useEffect(() => {
    setInterval(getTime, 1000);
  }, []);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    setClicked([...clicked, time]);
  };

  return (
    <AppContext.Provider
      value={{
        time,
        clickCount,
        setClickCount,
        clicked,
        setClicked,
        handleClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
