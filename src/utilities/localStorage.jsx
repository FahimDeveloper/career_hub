
const addToDb = (id) => {
    let shoppingCart = getShoppingCart()
    const quantity = shoppingCart[id]
    if (!quantity) {
        shoppingCart[id] = 1
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart))
}
const getApplyData = () => {
    let shoppingCart = {}
    const storedCart = localStorage.getItem("shopping-cart")
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}
export {
    addToDb,
    getApplyData,
}

