const getProducts = async (name) => {
    const response = await fetch(`https://6241b1ae042b562927a7d0c5.mockapi.io/${name}`);
    return await response.json();
}

const getAllCategories = async () => {
    const response = await fetch('/react-sushi-spa/categories.json');
    return await response.json();
}

export { getProducts, getAllCategories };