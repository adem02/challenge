import React from 'react'
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Auth = (props) => {

    const firebase = React.useContext(FirebaseContext);

    const history = useHistory();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {
        if (firebase.auth.currentUser) {
            history.push('/projects-list');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePwdChange = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        firebase.signIn(email, password).then(() => {
            history.push('/projects-list')
        })
    }

    const btn = (email !== 'super-admin@hd.org' && email !== 'admin@hd.org') || password === '' || password.length <= 7 ?
        <button type="submit" className="btn" disabled>Connect</button> :
        <button type="submit" className="btn">Connect</button>

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center" style={{ height: 400 }}>
                <form onSubmit={handleSubmit}>
                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text material-icons">person</span>
                        </div>
                        <input type="text" className="form-control" name="email" value={email} onChange={handleEmailChange} placeholder="username" />

                    </div>
                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text material-icons">lock</span>
                        </div>
                        <input type="password" className="form-control" name="password" value={password} onChange={handlePwdChange} placeholder="password" />
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
