import { useState } from "react";

// TODO: use env var or config
const OPEN_FOOD_FACTS_API_URL =
    'https://world.openfoodfacts.org/api/v3/product/';

export const useFoodFacts = () => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState();
    const [error, setError] = useState<unknown>();

    const fetchFoodFacts = async (barcode: string) => {
        setLoading(true);
        try {
            const data = await fetch(`${OPEN_FOOD_FACTS_API_URL}${barcode}`);
            const json = await data.json();
            setProduct(json.product);
        } catch (e: unknown) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };
    return {
        product,
        loading,error,
        fetchFoodFacts,
    }
};
