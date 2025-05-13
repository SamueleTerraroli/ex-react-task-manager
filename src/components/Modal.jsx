import { createPortal } from 'react-dom';
import { ReactDOM } from 'react-dom';

const Modal = ({ title, content, show, onClose, onConfirm, confirmText = "Conferma" }) => {

    if (!show) return null;
    return createPortal(
        <div className='overlay'>
            <div className='modal'>
                <h2>{title}</h2>
                <div>{content}</div>
                <div className='modal-buttons'>
                    <button onClick={onClose}>Annulla</button>
                    <button onClick={onConfirm}>{confirmText}</button>
                </div>

            </div>
        </div>,
        document.body
    )
    return (
        <div>Modal</div>
    )
}

export default Modal