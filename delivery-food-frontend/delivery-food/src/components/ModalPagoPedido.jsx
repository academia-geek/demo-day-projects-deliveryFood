import { Modal } from "rsuite";
import { PaymentMethod } from "./PaymentMethod";

export const ModalPagoPedido = ({ modalState, setModalState }) => {
  return (
    <Modal open={modalState} onClose={() => setModalState(false)} size="md">
      <Modal.Body className="">
        <PaymentMethod />
      </Modal.Body>
    </Modal>
  );
};
