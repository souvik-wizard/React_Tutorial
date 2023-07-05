import classes from "./Card.module.css";

const MealItemForm = (props) => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
};

export default MealItemForm;