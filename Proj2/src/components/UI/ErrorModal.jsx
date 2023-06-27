import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import ReactDOM from 'react-dom';
import React from 'react';


// Using Traditional approach

// const ErrorModal = props => {
//     return (
//         <div>
//             <div className={classes.backdrop} onClick={props.onPress} />
//             <Card className={classes.modal}>
//                 <header className={classes.header}>
//                     <h2>{props.title}</h2>
//                 </header>
//                 <div className={classes.content}>
//                     <p>{props.message}</p>
//                 </div>
//                 <footer className={classes.actions}>
//                     <Button onClick={props.onPress}>Okay</Button>
//                 </footer>
//             </Card>
//         </div>
//     );
// }


// Using portals to make code and component clear and efficient / portals can be used to render an element outside of its parent component's DOM node

const ErrorModal = props => {

    const Backdrop = props => {
        return <div className={classes.backdrop} onClick={props.onPress} />
    }

    const ModalOverlay = props => {
        return(<Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onPress}>Okay</Button>
            </footer>
        </Card>)
    }
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onPress={props.onPress}/>,document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onPress={props.onPress}/>,document.getElementById('overlay-root'))}
        </React.Fragment>
    );
}

export default ErrorModal;