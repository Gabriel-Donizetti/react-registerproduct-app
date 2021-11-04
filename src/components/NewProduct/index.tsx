import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import style from './style.module.scss'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export function NewProduct(){

    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }

  
    function closeModal() {
      setIsOpen(false);
    }

    return(
    <div>
        <button onClick={openModal} className={style.addnewproduct}>
        <i className="fas fa-plus"></i>Adicionar Produto
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <h2>Cadastro de produto</h2>
          <button className="react-modal-close" onClick={closeModal}>
              <i className="far fa-times-circle"></i>
          </button>
          <form>
                <div className="form-group">
                    <label htmlFor="">Nome:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Descrição:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Quantidade:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Categoria:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Preço:</label>
                    <input type="text" className="form-control" />
                </div>
                <button type="submit">
                    Cadastrar
                </button>
          </form>
        </Modal>
      </div>
    );
}