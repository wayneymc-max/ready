
import foods from "@/data/foods.json";

const BASE_URL = "https://fodmapguide.com";

export default function sitemap() {
    const categories = [
        "fruits",
        "vegetables",
        "bread-cereals",
        "proteins",
        "dairies",
        "drinks",
        "oils-fats",
        "nuts-seeds",
        "snacks",
        "condiments-spreads",
    ];

    const urls = [
        BASE_URL,
        `${BASE_URL}/category`,

        ...categories.map(
            (category) =>
                `${BASE_URL}/category/${category}`
        ),

        ...foods.map(
            (food) =>
                `${BASE_URL}/category/${food.category}/${food.slug}`
        ),
    ];

    // Prevent duplicate URLs in the sitemap.
    return [...new Set(urls)].map((url) => ({
        url,
    }));
}
