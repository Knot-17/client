import { createContext, useContext, useState } from "react";

export const StepperContext = createContext({ userData: "", setUserData: null });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");
  const [finalData , setFinalData] = useState([]);

  function submitData(handleClick){
    setFinalData(finalData => [...finalData , userData]);
    setUserData('');
    handleClick("next");
  }

  return (
    <StepperContext.Provider value={{ userData,setUserData,submitData,finalData,setFinalData}}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}


// import React , {useState} from "react";
// import SignUpPage from "../../../screens/signup";


// export const multiStepContext = React.createContext();

// const StepContext = () => {
//   const [userData , setUserData] = useState([]);
//   const [finalData,setFinalData] = useState([]);

//   function submitData(){
//     setFinalData(finalData => [...finalData,userData]);
//     setUserData('');
//   }
//   return(
//     <>
//       <multiStepContext.Provider value={{userData,setUserData,finalData,setFinalData,submitData}}>
//         <SignUpPage/>
//       </multiStepContext.Provider>
//     </>
//   )
// }