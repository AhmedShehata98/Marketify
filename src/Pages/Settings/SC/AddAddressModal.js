import React from "react";

function AddAddressModal(props) {
  const handleCloseModal = (target) => {
    target.closest("main").closest("main").classList.remove("show");
    target.closest("main").style.display = "none";
    target.closest("main").style.background = "transparent";
    document.body.style.overflow = "auto";
    document.body.style.marginBlockEnd = "initial";
  };
  return (
    <main className="modal show" id="AddAddressModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">add your Address</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={({ target }) => handleCloseModal(target)}
            ></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={({ target }) => handleCloseModal(target)}
            >
              Close Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AddAddressModal;
