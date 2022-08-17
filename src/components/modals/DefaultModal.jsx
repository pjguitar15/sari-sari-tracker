import React from 'react'
// antd
// import { Modal } from 'antd'

const DefaultModal = ({ showDefaultModal, setShowDefaultModal }) => {
  const handleOk = (e) => {
    console.log(e)
    setShowDefaultModal(false)
  }
  const handleCancel = (e) => {
    console.log(e)
    setShowDefaultModal(false)
  }
  return (
    <>
      <Modal
        title='Basic Modal'
        visible={showDefaultModal}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: true,
        }}
        cancelButtonProps={{
          disabled: true,
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default DefaultModal
