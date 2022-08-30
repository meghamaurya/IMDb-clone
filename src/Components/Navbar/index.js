import './styles.css';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    const handleLogout = () => {
        props.setIsSigned(false);
        props.setUser("");
        // localStorage.clear()
    }
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">IMDb</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li className="dropdown"><Link className="dropdown-toggle" data-toggle="dropdown" to="/menu">Menu <span className="caret"></span></Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/movies">Movies</Link></li>
                            <li><Link to="/tvSeries">Tv Series</Link></li>
                            <li><Link to="/awardsEvent">Awards & Event</Link></li>
                        </ul>
                    </li>
                </ul>
                <form className="navbar-form navbar-left" action="/action_page.php">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit">
                                <i className="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                    </div>
                </form>

                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/watchlist"><span className="glyphicon glyphicon-watchlist"></span> Watchlist</Link></li>
                    {!props.isSignin ? <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li> :
                        <li><Link to="/signup" onClick={handleLogout}><span className="glyphicon glyphicon-user"></span> Sign out</Link></li>}
                    <li><Link to="/login" ><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}