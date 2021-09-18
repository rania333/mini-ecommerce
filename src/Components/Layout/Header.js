import 'react-icons/all'
import Navbar from './Navbar';
import classes from './Header.module.scss';
function Header(props) {
    return ( 
        <div className={classes.header} >
            <h2> The Furnish </h2>
            <Navbar/>
        </div>
    );
}
export default Header;