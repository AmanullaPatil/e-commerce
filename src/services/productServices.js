import { stripe } from '../utils/stripe'

export const getProducts = async (limit) => {
    let products = null
    try {
        products = await stripe.products.list({
            limit: limit || 10,
            expand: ['data.default_price']
        })

    } catch {
        (err)
        console.log("error from stripe", err)
    }

    console.log(JSON.stringify(products, null, 2))
    return products
}
export const getProductById = async (productId) => {
    let product = null
    try {
        product = await stripe.products.retrieve(
            productId, {
            expand: ['default_price']
        })

    } catch (err) { console.log("error from stripe", err) }
    console.log(JSON.stringify(product, null, 2))
    return product
}

