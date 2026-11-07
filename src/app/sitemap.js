
import foods from '@/data/foods.json';

const BASE_URL = 'https://fodmapguide.com';

export default function sitemap() {
    const categories = [
        'fruits',
        'vegetables',
        'bread-cereals',
        'proteins',
        'dairies',
        'drinks',
        'oils-fats',
        'nuts-seeds',
        'snacks',
        'condiments-spreads',
    ];

    const categoryPages = categories.map((category) => ({
        url: `${BASE_URL}/category/${category}`,
        lastModified: new Date(),
    }));

    const foodPages = foods.map((food) => ({
        url: `${BASE_URL}/category/${food.category}/${food.slug}`,
        lastModified: new Date(),
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/category`,
            lastModified: new Date(),
        },
        ...categoryPages,
        ...foodPages,
    ];
}
