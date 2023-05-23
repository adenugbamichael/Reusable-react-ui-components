import { useState } from "react"
import Modal from "../components/Modal"
import Button from "../components/Button"

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  )

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept </p>
    </Modal>
  )

  return (
    <div className='relative'>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ratione
        natus nesciunt voluptas eveniet autem deserunt delectus consectetur enim
        cum. Dolor ratione error ullam blanditiis quia, quibusdam soluta!
        Fugiat, autem!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ratione
        natus nesciunt voluptas eveniet autem deserunt delectus consectetur enim
        cum. Dolor ratione error ullam blanditiis quia, quibusdam soluta!
        Fugiat, autem!
      </p>
    </div>
  )
}

export default ModalPage
