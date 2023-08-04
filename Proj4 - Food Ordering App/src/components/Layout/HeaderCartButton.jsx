import classes from './HeaderCartButton.module.css';
import CartIcon from '../../components/Cart/CartIcon';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const HeaderCartButton = (props) => {
    const cardCtx = useContext(CartContext);
    const numberOfCartItems = cardCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount; 
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span >
                Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton