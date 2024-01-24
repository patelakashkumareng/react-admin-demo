import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="modal-backdrop fade show" />
};

const ModalOverlay = (props) => {
  let modalVAlign = "modal-dialog"
  if(props.center === true){
    modalVAlign = "modal-dialog modal-dialog-centered"
  }
  const modalSize = (props.modalSize) ? props.modalSize : 'modal-md'
  
  return (
    <>
      <div className="modal" style={{ display: "block" }}>
        <div className={modalVAlign + " " + modalSize}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.title}</h5>
              <button type="button" className="close" onClick={props.onClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body m-3">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} {...props}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
