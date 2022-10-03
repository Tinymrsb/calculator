import React from "react";

export const CalcContext = createcontext();
const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const providerValue = {
    calc,
    setCalc,
  };
  return (
    <CalcContext.CalcProvider value={providerValue}>
      {children}
    </CalcContext.CalcProvider>
  );
};

export default CalcProvider;
