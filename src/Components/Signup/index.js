import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Signup(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    let errorsObj = { username: '', password: '', email: '' };
    const [errors, setErrors] = useState(errorsObj);
    const Navigate = useNavigate();

    const handleClick = (e) => {
        if (username === 'megha' & password === 'megha') {
            props.setUser(username);
            props.setIsSigned(true);
            Navigate('/');
            // localStorage.setItem("IsLogin", "true");
            // localStorage.setItem("user", username);
        } else {
            alert("Try again");
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (username === '') {
            errorObj.username = '**Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = '**Required';
            error = true;
        }
        if (email === '') {
            errorObj.email = "**Required";
            error = true;
        }
        setErrors(errorObj);
        if (!error) {
            console.log('form submit')
        }
    }
    return (
        <div className="container box">
            {/* action="/action_page.php" */}
            <form className="form-horizontal" onSubmit={handleSubmit} >
                <div className="form-group">
                    <label className="control-label col-sm-4" htmlFor="username">Username:</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control input" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-4" htmlFor="email">Email:</label>
                    <div className="col-sm-6">
                        <input type="email" className="form-control input" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-4" htmlFor="pwd">Password:</label>
                    <div className="col-sm-6">
                        <input type="password" className="form-control input" id="pwd" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-4" htmlFor="pwd">Re-Enter Password:</label>
                    <div className="col-sm-6">
                        <input type="password" className="form-control input" id="pwd" placeholder="Re-Enter password" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-9">
                        <div className="checkbox">
                            <label><input type="checkbox" /> Remember me</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-9">
                        <button type="submit" className="btn btn-default s-btn" onClick={handleClick} >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}