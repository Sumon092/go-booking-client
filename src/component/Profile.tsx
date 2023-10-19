import  { useState } from "react";
import UpdateModal from "./Dashboard/UpdateModal";

const Profile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Hi Name, Welcome to your profile</h1>
      <div className="text-lg flex flex-col mb-4">
        <span>Email: m.sumon@outlook.com</span>
        <span>Phone No. : 01916231926</span>
        <span>Address: Jhinia, Sherpur</span>
      </div>

      <UpdateModal isOpen={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default Profile;
