import classes from './HeaderCartButton.module.css';
import CartIcon from '../../components/Cart/CartIcon';
import CartContext from '../../store/cart-context';
import { useContext, useEffect, useState } from 'react';

const HeaderCartButton = (props) => {
    const [highlightedBtn, setHighlightedBtn] = useState(false);

    const cardCtx = useContext(CartContext);
    const numberOfCartItems = cardCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const butonClasses = `${classes.button} ${highlightedBtn ? classes.bump : ''}`

    useEffect(() => {
        if (cardCtx.items.length === 0) {
            return;
        }
        setHighlightedBtn(true);
        const cleanUp = setTimeout(() => {
            setHighlightedBtn(false);
        }, 300);

        return () => {
            clearTimeout(cleanUp);
        };
    }, [cardCtx.items]);

    return (
        <button className={butonClasses} onClick={props.onClick}>
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