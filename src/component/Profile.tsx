import  { useState } from "react";
import UpdateModal from "./Dashboard/UpdateModal";
import { getUserInfo } from "../services/authService";

const Profile = () => {
  const {name,email,address,contact_no,role}=getUserInfo() as { role: string,name:string,email:string,address:string,contact_no:string }
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Hi {name}, Welcome to your profile</h1>
      <div className="text-lg flex flex-col mb-4">
        <span>Email: {email}</span>
        <span>Role: {role}</span>
        <span>Phone No. : {contact_no}</span>
        <span>Address: {address}</span>
      </div>

      <UpdateModal isOpen={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default Profile;
