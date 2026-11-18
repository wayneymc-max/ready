
import foods from "@/data/foods.json";
import extra from "@/data/extra.json";

const RATING_EXPLANATIONS = {
    low: {
        title: "Low FODMAP Classification",
        summary:
            "This food is classified as low FODMAP in this guide. The listed serving information should be considered when planning meals.",
    },
    medium: {
        title: "Medium FODMAP Classification",
        summary:
            "This food is classified as medium FODMAP in this guide. Its serving size is important when considering its FODMAP content.",
    },
    high: {
        title: "High FODMAP Classification",
        summary:
            "This food is classified as high FODMAP in this guide. Check the available serving information and ingredients when making food choices.",
    },
};

export function getEnrichedFood(foodItem) {
    if (!foodItem) return null;

    const level =
        foodItem.overallFodmapLevel?.toLowerCase() || "unknown";

    const servingSizes = [
        {
            level: "Low FODMAP",
            amount: foodItem.lowFodmapServing,
        },
        {
            level: "Medium FODMAP",
            amount: foodItem.mediumFodmapServing,
        },
        {
            level: "High FODMAP",
            amount: foodItem.highFodmapServing,
        },
    ];

    // Get additional information using the food slug
    const additionalInfo = extra[foodItem.slug] || {};

    const relatedFoods = foods
        .filter(
            (item) =>
                item.category === foodItem.category &&
                item.id !== foodItem.id
        )
        .slice(0, 4);

    return {
        ...foodItem,

        sections: {
            overview: foodItem.description || null,

            servingSizeInformation: servingSizes,

            understandingRating:
                RATING_EXPLANATIONS[level] || {
                    title: "FODMAP Classification",
                    summary:
                        "A classification is not currently available for this food.",
                },

            // New food-specific information
            commonUses: additionalInfo.commonUses || [],

            ingredientAwareness:
                additionalInfo.ingredientAwareness || null,

            relatedFoods,

            disclaimer:
                "FODMAP content and individual tolerance can vary. This information is for educational purposes and is not a substitute for professional medical advice.",

            furtherReading: {
                text:
                    "For additional information about FODMAP research and the low FODMAP diet, visit:",
                linkText: "Monash University FODMAP",
                url: "https://www.monashfodmap.com/",
            },
        },
    };
}
