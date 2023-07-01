import React from 'react'
import "../../css/ErrorPage.css"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const [countdown, setCountdown] = useState(5)
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            countdown === 1 ? navigate("/") : setCountdown(countdown - 1)
        }, 1000);
    }, [countdown])

    return (
        <div className='error-page-container'>
            <img className='error-page-image' src="/assets/errorPageImage.jpg" alt="Imagen de error page" />
            <div className='error-page-text'>Esta pagina no existe, seras redireccionado en {countdown} segundos...</div>
        </div>
    )
}

export default ErrorPage