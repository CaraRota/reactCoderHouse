import { createContext, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, qty) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, qty }])
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
    }

    const removeAll = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQty = () => {
        return cart.reduce((acc, prod) => (acc += prod.qty), 0);
    };

    const total = () => {
        return cart.reduce((acc, prod) => (acc += prod.precio * prod.qty), 0);
    };
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, removeAll, totalQty, total }}>
            {children}
        </CartContext.Provider>
    )
}