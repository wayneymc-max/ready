
"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FoodLists from "./foodLists";
import Dialogue from "./dialogue";

import { getEnrichedFood } from "@/utils/foodUtils";

import {
    setFoods,
    setSearchTerms,
} from "@/data/foodsSlice";

import styles from "./foodSection.module.css";

export default function FoodSection({ filtered, categoryName }) {
    const dispatch = useDispatch();

    const searchTerms = useSelector(
        (state) => state.foods.searchTerms
    );

    const fromTheSearch = useSelector(
        (state) => state.foods.fromSearch
    );

    const fromTheColor = useSelector(
        (state) => state.foods.fromColor
    );

    const filteredFoods = useSelector(
        (state) => state.foods.filteredFoods
    );

    const isLoading = useSelector(
        (state) => state.foods.isLoading
    );

    // Dialogue state
    const [selectedFood, setSelectedFood] = useState(null);

    useEffect(() => {
        dispatch(setFoods(filtered));
        dispatch(setSearchTerms(searchTerms));
    }, [filtered, dispatch, categoryName]);

    // Open food dialogue without navigation
    const handleFoodClick = (food) => {
        setSelectedFood(food);
    };

    // Close dialogue
    const handleCloseDialogue = () => {
        setSelectedFood(null);
    };

    let content = null;

    if (isLoading && filteredFoods.length === 0) {
        content = <p className={styles.loading}></p>;
    } else if (
        filteredFoods.length === 0 &&
        fromTheSearch &&
        searchTerms !== ""
    ) {
        content = (
            <p className={styles.noFood}>
                We couldn't find '
                <span className={styles.highlight}>
                    {searchTerms}
                </span>
                ' under the{" "}
                <span className={styles.highlight}>
                    {categoryName}
                </span>{" "}
                category. Try searching for another item or
                explore our other food categories.
            </p>
        );
    } else if (
        filteredFoods.length === 0 &&
        fromTheColor
    ) {
        content = (
            <p className={styles.noFood}>
                No foods match these filters. Try another filter.
            </p>
        );
    } else if (filteredFoods.length > 0) {
        content = (
            <FoodLists
                filtered={filteredFoods}
                onFoodClick={handleFoodClick}
            />
        );
    }

    return (
        <>
            <div className={styles.mainfoodContainer}>
                {content}
            </div>

            {selectedFood && (
                <Dialogue
                    currentFood={getEnrichedFood(selectedFood)}
                    onClose={handleCloseDialogue}
                />
            )}
        </>
    );
}
