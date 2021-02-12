import React from 'react'
import { FirebaseContext } from '../Firebase';

const Auth = (props) => {

    const firebase = React.useContext(FirebaseContext);

    const [user, setUser] = React.useState({ email: '', password: '' });

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    const btn = (user.email !== 'super-admin@hd.org' && user.email !== 'admin@hd.org') || user.password === '' || user.password.length <= 7 ?
        <button type="submit" className="btn" disabled>Connect</button> :
        <button type="submit" className="btn">Connect</button>

    console.log(props);
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center" style={{ height: 400 }}>
                <form onSubmit={handleSubmit}>
                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text material-icons">person</span>
                        </div>
                        <input type="text" className="form-control" name="email" value={user.email} onChange={handleChange} placeholder="username" />

                    </div>
                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text material-icons">lock</span>
                        </div>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} placeholder="password" />
                    </div>

                    <div className="form-group text-center">
                        {btn}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth
