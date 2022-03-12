import { createContext, useState } from 'react';
import chooseNo from '../data/chooseNo';
import chooseYes from '../data/chooseYes';
const DataContext = createContext({});



export const DataProvider = ({ children }) => {
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    const [yesAnswer, setYesAnser] = useState(chooseYes);

    return (
        <DataContext.Provider value={{
            page,
            chooseNo,
            setPage,
            chooseYes,
            list,
            setYesAnser,
            yesAnswer,
            setList
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;