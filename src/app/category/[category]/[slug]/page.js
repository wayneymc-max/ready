
import foods from "@/data/foods.json";
import FoodSection from "@/components/foodSection";
import Dialogue from "@/components/dialogue";
import { notFound } from "next/navigation";

export default async function FoodPage({ params }) {
    const { category, slug } = await params;

    const filtered = foods.filter(
        food => food.category === category
    );

    const currentFood = filtered.find(
        food => food.slug === slug
    );

    if (!currentFood) {
        notFound();
    }

    return (
        <>
            <FoodSection
                filtered={filtered}
                categoryName={category}
            />

            <Dialogue currentFood={currentFood} />
        </>
    );
}
