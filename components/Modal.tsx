import React from 'react';
import Modal from 'react-modal';

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
  nodeId: string;
  nodeLabel: string;
  position: { x: number; y: number };
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, closeModal, nodeId, nodeLabel, position }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}   style={{ content: { top: position.y, left: position.x, width: "25%" } }}>
      <h2>Node Information</h2>
      <p>ID: {nodeId}</p>
      <p>Label: {nodeLabel}</p>
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
  );
};

export default CustomModal;
