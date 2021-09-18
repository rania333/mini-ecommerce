import {HiOutlineShoppingBag} from'react-icons/all';
import classes from './Navbar.module.scss';
function Navbar() {
    return ( 
        <ul className={classes.ul}>
            <li>Shop</li>
            <li> Collection</li>
            <li><HiOutlineShoppingBag/> </li>
        </ul>
    );
}

export default Navbar;