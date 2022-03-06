import React, { createContext, useContext } from 'react';
const countContext = createContext();//create a context vble / global vble
const langContext = createContext();
export default function CountContextProvider({ children }) {
    const [count, setCount] = React.useState(0);
    const prop_text = "Count with me!"
    return (
        <countContext.Provider value={{ count, setCount }}>
            <langContext.Provider value={prop_text}>
                {children}
            </langContext.Provider>
        </countContext.Provider>
    );

}
export function useCountContext() {
    return useContext(countContext);
}
export function useLangContext() {
    return useContext(langContext);
}