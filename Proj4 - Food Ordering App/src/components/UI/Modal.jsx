import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModalOverlays= props => {
    return <div className={classes.modal}>{props.children}</div>
};

const Modal = (props) => {
    return(
        <>  
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.querySelector('#overlays'))}
        {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, document.querySelector('#overlays'))}
        </>
    )
};

export default Modal;