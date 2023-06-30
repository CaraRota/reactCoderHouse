import { createContext, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

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
            return toast('🛒 Este producto ya se encuentra en el carrito', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
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