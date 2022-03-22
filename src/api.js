const getProducts = async () => {
    const response = await fetch('/products.json');
    return await response.json();
}

const getAllCategories = async () => {
    const response = await fetch('/categories.json');
    return await response.json();
}

export { getProducts, getAllCategories };