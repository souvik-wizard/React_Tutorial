import classes from './Header.module.css';
import headerimage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>Watch Dish</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={headerimage} aria-hidden alt="A dining table image!" />
            </div>
        </>
    );
};

export default Header;