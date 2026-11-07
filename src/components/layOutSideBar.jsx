
'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./layOutSideBar.module.css";

import SearchItems from "@/components/searchItems";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import {
    setSelectedColor,
    toggleSidebar,
    clearColors
} from "@/data/foodsSlice";

const foods = [
    "fruits",
    "vegetables",
    "bread-cereals",
    "proteins",
    "dairies",
    "drinks",
    "oils-fats",
    "nuts-seeds",
    "snacks",
    "condiments-spreads"
];

export default function SideBar() {
    const pathname = usePathname();
    const dispatch = useDispatch();

    const isOpen = useSelector(state => state.foods.isOpen);
    const selectedColor = useSelector(state => state.foods.selectedColor);

    const categoryName = pathname.split("/")[2];

    return (
        <nav className={styles.navBarContainer}>

            {/* LOGO */}
            <div className={styles.logoSearchContainer}>

                <Link
                    href="/"
                    className={styles.logoLink}
                    aria-label="Go to homepage"
                >
                    <Image
                        src="/FodMaps.jpg"
                        alt="FODMAP Guide"
                        width={200}
                        height={60}
                        priority
                        className={styles.logo}
                    />
                </Link>

                {/* SEARCH */}
                <div className={styles.searchWrapper}>
                    <SearchItems />
                </div>

            </div>

            {/* CATEGORIES */}
            <div className={styles.sidebarButtonsContainer}>
                {foods.map(food => (
                    <Link
                        href={`/category/${food}`}
                        key={food}
                        aria-current={
                            categoryName === food ? "page" : undefined
                        }
                        className={`
                            ${styles.sidebarButtons}
                            ${categoryName === food ? styles.sidebarButtonsActive : ""}
                        `}
                    >
                        {food.replaceAll("-", " ")}
                    </Link>
                ))}
            </div>

            {/* FILTERS */}
            <div
                className={`
                    ${styles.buttonShowSideBarContainer}
                    ${isOpen ? styles.buttonShowSideBarContainerOpen : ""}
                `}
            >

                <div
                    className={`
                        ${styles.filterContainer}
                        ${isOpen ? styles.filterContainerOpen : ""}
                    `}
                >

                    {selectedColor && (
                        <button
                            type="button"
                            className={styles.clearFilterButton}
                            onClick={() => dispatch(clearColors())}
                        >
                            Clear
                        </button>
                    )}

                    <button
                        type="button"
                        aria-label="Low FODMAP"
                        aria-pressed={selectedColor === "low"}
                        className={`
                            ${styles.filterButtonLow}
                            ${selectedColor === "low" ? styles.filterButtonLowSelected : ""}
                        `}
                        onClick={() => dispatch(setSelectedColor("low"))}
                    />

                    <button
                        type="button"
                        aria-label="Medium FODMAP"
                        aria-pressed={selectedColor === "medium"}
                        className={`
                            ${styles.filterButtonMedium}
                            ${selectedColor === "medium" ? styles.filterButtonMediumSelected : ""}
                        `}
                        onClick={() => dispatch(setSelectedColor("medium"))}
                    />

                    <button
                        type="button"
                        aria-label="High FODMAP"
                        aria-pressed={selectedColor === "high"}
                        className={`
                            ${styles.filterButtonHigh}
                            ${selectedColor === "high" ? styles.filterButtonHighSelected : ""}
                        `}
                        onClick={() => dispatch(setSelectedColor("high"))}
                    />

                </div>

                <button
                    type="button"
                    className={styles.buttonShowSideBar}
                    onClick={() => dispatch(toggleSidebar())}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Close filters" : "Open filters"}
                >
                    {isOpen ? "×" : "☰"}
                </button>

            </div>

        </nav>
    );
}
