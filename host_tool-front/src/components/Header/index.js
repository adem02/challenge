import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../styles/header.css'
import { FirebaseContext } from '../Firebase';
import hdimg from '../../images/humanity-diapo-img.jpg'

const Header = () => {

    const firebase = React.useContext(FirebaseContext);
    const history = useHistory();

    const handleClick = () => {
        firebase.logOut();
        history.push('/');
    }

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand ml-3" to="/"><img src={hdimg} alt='Humanity diaspo' width={100} height={55} /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/create-project">New project</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects-list">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" style={{ cursor: 'pointer' }} onClick={handleClick}>Sign out</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
