import React from 'react'
import errorPage from '../../images/error-page-image.png'
import '../styles/errorPage.css';


const ErrorPage = () => {
    return (
        <div className="error">
            <img src={errorPage} alt="Error page" height={300} width={500} />
        </div>
    )
}

export default ErrorPage
