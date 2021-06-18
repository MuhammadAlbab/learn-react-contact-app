import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CustomModal = ({ data, text, modal, onConfirm, onCancel }) => {
  return (
    <div>
      <Modal isOpen={modal}>
        <ModalHeader>Pengingat!</ModalHeader>
        <ModalBody>
          {text} <b>{data.name}</b>?
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={onConfirm}>
            Lanjutkan
          </Button>{" "}
          <Button color="danger" onClick={onCancel}>
            Batalkan
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CustomModal;
