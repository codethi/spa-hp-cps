import "./NewCharacterModal.css";

import Modal from "react-modal";

export function NewCharacterModal({ isOpen, closeModal, onCreate }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="overley-react-modal"
      className="content-react-modal"
    >
      <button type="button" className="close-modal-button" onClick={closeModal}>
        x
      </button>
      <h2>Criar Personagem</h2>
      <form>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome do personagem"
        />
        <input
          type="text"
          name="house"
          id="house"
          placeholder="Casa do personagem"
        />
        <input
          type="text"
          name="actor"
          id="actor"
          placeholder="Artista do personagem"
        />
        <input
          type="text"
          name="image"
          id="image"
          placeholder="Link da imagem do personagem"
        />

        <button type="submit" className="new-character">
          Cadastrar
        </button>
      </form>
    </Modal>
  );
}
