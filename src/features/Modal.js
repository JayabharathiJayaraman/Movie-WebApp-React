import React from "react";

const Modal = props => {
  const divStyle = {
    display: props.displayModal ? "block" : "none"
  };

  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  return (
    <div>
      <div
        onClick={closeModal}
        style={divStyle}
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Modal Body</div>
            <div className="modal-footer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
