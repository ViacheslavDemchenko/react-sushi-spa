const getProducts = async () => {
    const response = await fetch('/react-sushi-spa/products.json');
    return await response.json();
}

const getAllCategories = async () => {
    const response = await fetch('/react-sushi-spa/categories.json');
    return await response.json();
}

export { getProducts, getAllCategories };