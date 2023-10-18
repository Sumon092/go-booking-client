import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ProfileUpdateForm from './ProfileUpdateForm';

interface ProfileUpdateFormProps {
  email: string;
  phone: string;
  address: string;
}

const UpdateModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const defaultValues: ProfileUpdateFormProps = {
    email: '',
    phone: '',
    address: '',
  };

  const handleSubmit = (data: ProfileUpdateFormProps) => {
    console.log('Form submitted with data:', data);
    handleOk()
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Update Profile
      </Button>
      <Modal
        title="Update your profile"
        visible={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <ProfileUpdateForm defaultValues={defaultValues} onSubmit={handleSubmit}/>
      </Modal>
    </>
  );
};

export default UpdateModal;
