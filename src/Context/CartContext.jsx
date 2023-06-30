import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQty, setTotalQty] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, qty) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, qty }])
            setTotalQty(totalQty + qty)
            setTotal(total + (qty * item.precio))
        } else {
            // Agregar Toastify
            console.log("el producto ya se encuentra en carro")
        }
    }
    const removeItem = (itemId) => {
        const updateCart = cart.filter(prod => prod.id !== itemId)
        setCart(updateCart)
        setTotalQty(totalQty - itemId.qty)
        setTotal(total - (itemId.qty * itemId.precio))
    }
    const removeAll = () => {
        setCart([])
        setTotalQty(0)
        setTotal(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, removeAll, totalQty, total }}>
            {children}
        </CartContext.Provider>
    )
}