'use client';
import Link from "next/link";
import { useDispatch } from "react-redux";
import { clearColors } from "@/data/foodsSlice";
import { useEffect } from "react";
import styles from './overAll.module.css'
export default function OverAll({ foods }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearColors());
    }, [dispatch]);

    return (<div className={styles.categoriesContainer}>
        {foods.map(food => (
            <Link
                href={`/category/${food}`}
                key={food}
                className={styles.categoryButton}
            >
                {food.replaceAll("-", " ")}
            </Link>
        ))}
    </div>
    );
}