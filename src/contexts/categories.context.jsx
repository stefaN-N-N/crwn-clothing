import { createContext, useState, useEffect } from "react";
import { addColectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, [])

    // ovo prvi put samo da bi se napravila baza
    // useEffect(() => {
    //     addColectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}