'use client'

import styles from './searchItems.module.css'
import { useDispatch, useSelector } from "react-redux";
import {
    setSearchTerms,
    setSelectedColor,
    closeDialog
    , clearColors
} from "@/data/foodsSlice";
import { useState, useEffect } from "react";

export default function SearchItems({ }) {

    const dispatch = useDispatch();
    const searchTerms = useSelector(state => state.foods.searchTerms);
    const selectedColor = useSelector(state => state.foods.selectedColor);
    let [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div
                className={styles.filterSearchContainer}
                onClick={() => dispatch(closeDialog())}
            >
                <div
                    className={styles.inputContainer}

                >
                    <input
                        id="search"
                        type="text"
                        value={searchTerms}
                        placeholder="Search in this category..."
                        className={styles.search}
                        onChange={(e) => {
                            dispatch(setSearchTerms(e.target.value));

                        }}

                    />

                    {searchTerms && (
                        <button
                            onClick={() => dispatch(setSearchTerms(""))}
                            className={styles.clearButton}
                            type="button"
                        >
                            🗙
                        </button>
                    )}
                </div>
            </div>
        </>)



}
