
import foods from "@/data/foods.json"
import FoodSection from "@/components/foodSection";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }) {

    const { category } = await params

    const filtered = foods
        .filter(food => food.category === category)

    if (filtered.length === 0) {
        notFound();

    }
    return (
        <>
            <FoodSection filtered={filtered} categoryName={category} />
        </>
    )
}

