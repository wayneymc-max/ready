import foods from "@/data/foods.json";
import Dialogue from "@/components/dialogue";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { category, slug } = await params;

    const currentFood = foods.find(
        food =>
            food.category === category &&
            food.slug === slug
    );

    if (!currentFood) {
        return {};
    }

    return {
        title: `${currentFood.name} | FODMAP Guide`,
        description:
            currentFood.description ||
            `Learn about the FODMAP level and serving information for ${currentFood.name}.`,
        alternates: {
            canonical: `https://fodmapguide.com/category/${category}/${slug}`,
        },
    };
}

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

    return (
        <Dialogue
            currentFood={currentFood}
            isIntercepted={true}
        />
    );
}