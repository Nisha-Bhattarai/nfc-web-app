import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import ExchangeContact from "../ExchangeContact/ExchangeContact"; // content, no auto-open inside
import "./ContactPermissionModal.css";

const ContactPermissionModal = () => {
  const [showPermission, setShowPermission] = useState(true);
  const [showExchange, setShowExchange] = useState(false);

  // always show permission modal on load
  useEffect(() => {
    setShowPermission(true);
    setShowExchange(false); // defensive: ensure the exchange modal is NOT open on mount
  }, []);

  const handleYes = () => {
    setShowPermission(false);
    // Option A: open immediately
    setShowExchange(true);
    // Option B: if your Modal supports onAfterClose, open inside that instead
  };

  const handleNo = () => setShowPermission(false);

  return (
    <>
      {/* Permission modal */}
      <Modal isOpen={showPermission} onClose={handleNo}>
        <p>Would you like to share your contact information with me to stay in touch?</p>
        <div className="modal-buttons">
          <button className="yes-btn" onClick={handleYes}>✓ Yes</button>
          <button className="no-btn" onClick={handleNo}>✗ No</button>
        </div>
      </Modal>

      {/* Exchange modal mounted ONLY when needed */}
      {showExchange && (
        <Modal isOpen onClose={() => setShowExchange(false)}>
          <ExchangeContact />
        </Modal>
      )}
    </>
  );
};

export default ContactPermissionModal;
