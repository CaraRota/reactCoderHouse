import React, { useContext, useState } from 'react'
import "../../css/Checkout.css"
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from "../../Context/CartContext"
import Loader from "../Loader/Loader"

import { getDocs, writeBatch, collection, query, where, documentId, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig"
import { Alert } from '@mui/material'

const Checkout = ({ onConfirm }) => {
    const [loading, setLoading] = useState(false)
    const [orderNumber, setOrderNumber] = useState("")

    const { cart, removeAll, total } = useContext(CartContext)

    const sendOrder = async ({ nombre, apellido, email, telefono }) => {
        setLoading(true)

        try {
            const defineOrder = {
                comprador: {
                    nombre, apellido, email, telefono
                },
                productos: cart,
                total: total(),
            }
            const batch = writeBatch(db)
            const noStock = []

            const productsIds = cart.map((prod) => prod.id)
            const productsRef = collection(db, "productos")
            const productsFB = await getDocs(query(productsRef, where(documentId(), "in", productsIds)))
            const { docs } = productsFB

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock

                const prodInCart = cart.find((prod) => prod.id === doc.id)
                const prodQty = prodInCart?.qty

                if (stockDB >= prodQty) {
                    batch.update(doc.ref, { stock: stockDB - prodQty })
                } else {
                    noStock.push({ id: doc.id, ...dataDoc })
                }
            })
            if (noStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, "ordenes")
                const orderAdded = await addDoc(orderRef, defineOrder)

                setOrderNumber(orderAdded.id)
                removeAll()
            } else {
                console.log("Hay productos fuera de stock")
            }
        } catch (error) {
            console.log("Error", error)
        } finally {
            setLoading(false)
        }
    }
    if (loading) {
        return <Loader />
    }
    return (
        <>
            <div className='checkout-text'>Checkout</div>
            <CheckoutForm onConfirm={sendOrder} />
            {orderNumber &&
                <div className='alert-order-created-container'>
                    <Alert className='alert-order-created' variant="outlined" severity="error">
                        Su orden ha sido creada, este es su ID: {orderNumber}
                    </Alert>
                </div>
            }
        </>
    )
}

export default Checkout