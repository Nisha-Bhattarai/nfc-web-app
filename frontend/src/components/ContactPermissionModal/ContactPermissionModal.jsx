import React, { useState, useEffect } from "react";
import "./ContactPermissionModal.css"; 

const ContactPermissionModal = () => {
  const [showModal, setShowModal] = useState(true);


  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // disable background scroll
    } else {
      document.body.style.overflow = ""; // re-enable scroll
    }

    // cleanup if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const handleYes = () => {
    console.log("User agreed to share contact info");
    setShowModal(false);
  };

  const handleNo = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>Would you like to share your contact information with me to stay in touch?</p>
        <div className="modal-buttons">
          <button className="yes-btn" onClick={handleYes}>✓ Yes</button>
          <button className="no-btn" onClick={handleNo}>✗ No</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPermissionModal;
