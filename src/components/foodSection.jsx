'use client'

import { useEffect } from "react";
import FoodLists from "./foodLists";
import styles from './foodSection.module.css'


import { useDispatch, useSelector } from "react-redux";
import {
    setFoods, setSearchTerms,
} from "@/data/foodsSlice";


export default function FoodSection({ filtered, categoryName }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFoods(filtered));
        dispatch(setSearchTerms(searchTerms));

        // dispatch(clearFilters())
    }, [filtered, dispatch, categoryName]);

    const searchTerms = useSelector(state => state.foods.searchTerms);
    const fromTheSearch = useSelector(state => state.foods.fromSearch);
    const fromTheColor = useSelector(state => state.foods.fromColor);
    const filteredFoods = useSelector(state => state.foods.filteredFoods);

    const isLoading = useSelector(state => state.foods.isLoading);
    let content;


    if (isLoading && filteredFoods.length === 0) {
        content = <p className={styles.loading}></p>
    }
    if ((!isLoading && filteredFoods.length === 0) || (filteredFoods.length === 0 && searchTerms !== '') && fromTheSearch) {
        content = <p className={styles.noFood}>
            We couldn't find '<span className={styles.highlight}>{searchTerms}</span>' under the <span className={styles.highlight}>{categoryName}</span> category. Try searching for another item or explore our other food categories.
        </p>
    }
    if ((!isLoading && filteredFoods.length === 0) && (filteredFoods.length === 0 && fromTheColor)) {
        content = <p className={styles.noFood}>
            No foods match these filters. Try another filter.
        </p>
    }
    if (filteredFoods.length > 0) {
        content = <FoodLists
            filtered={filteredFoods}
        />
    }
    return (
        <>
            <div
                className={styles.mainfoodContainer}            >
                {content}
            </div >
        </>
    )
}

