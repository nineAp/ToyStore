import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function ImageModal({src, title, show, close}) {


  return (
    <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={src} alt="toy" style={{height: '100%', width: '100%'}}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ImageModal