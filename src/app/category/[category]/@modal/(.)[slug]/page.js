
import foods from "@/data/foods.json";
import Dialogue from "@/components/dialogue";
import { notFound } from "next/navigation";

export default async function InterceptedFoodPage({ params }) {
    const { category, slug } = await params;

    const currentFood = foods.find(
        food =>
            food.category === category &&
            food.slug === slug
    );

    if (!currentFood) {
        notFound();
    }

    return <Dialogue currentFood={currentFood} />;
}
