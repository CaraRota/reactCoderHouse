import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    const [countdown, setCountdown] = useState(5)
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            countdown === 1 ? navigate("/") : setCountdown(countdown - 1)
        }, 1000);
    }, [countdown])
    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>Esta pagina no existe, seras redireccionado en {countdown} segundos...</div>
    )
}

export default ErrorPage