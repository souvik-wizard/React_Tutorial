import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>
};

const ModalOverlays= props => {
    return <div className={classes.modal}>{props.children}</div>
};

const Modal = props => {
    return(
        <>  
        {ReactDOM.createPortal(<Backdrop/>, document.getElimentById('overlays'))}
        {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, document.getElimentById('overlays'))}
        </>
    )
};

export default Modal;