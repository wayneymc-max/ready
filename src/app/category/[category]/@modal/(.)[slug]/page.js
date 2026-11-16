import foods from "@/data/foods.json";
import Dialogue from "@/components/dialogue";
import { notFound } from "next/navigation";


export async function generateMetadata({ params }) {
    const { category, slug } = await params;

    const currentFood = foods.find(
        (food) => food.category === category && food.slug === slug
    );

    if (!currentFood) {
        return {
            title: "Food Not Found",
        };
    }

    const canonicalUrl =
        `/category/${category}/${slug}`;

    const description =
        currentFood.description ||
        `Learn about ${currentFood.name}, including its FODMAP level and serving information.`;

    return {
        title: currentFood.name,
        description,

        alternates: {
            canonical: canonicalUrl,
        },

        openGraph: {
            title: `${currentFood.name} | FODMAP Food Guide`,
            description,
            url: canonicalUrl,
            type: "article",
            siteName: "FODMAP Food Guide",
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