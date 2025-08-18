import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal"
import "./ContactPermissionModal.css";

const ContactPermissionModal = () => {
  const [showModal, setShowModal] = useState(true);

  // Ensure modal pops up on every load
  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleYes = () => {
    console.log("User agreed to share contact info");
    setShowModal(false);
  };

  const handleNo = () => {
    console.log("User declined");
    setShowModal(false);
  };

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <p>Would you like to share your contact information with me to stay in touch?</p>
      <div className="modal-buttons">
        <button className="yes-btn" onClick={handleYes}>✓ Yes</button>
        <button className="no-btn" onClick={handleNo}>✗ No</button>
      </div>
    </Modal>
  );
};

export default ContactPermissionModal;
