import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from "react";
import { useCookies } from "react-cookie";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isRegister, setIsRegister] = useState(true);

  const authToken = false;

  const handleClick = () => {
    setShowModal(true);
    setIsRegister(true);
  };

  return (
    <div className="overlay">
      <Nav
        authToken={authToken}
        minimal={false}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsRegister={setIsRegister}
      />
      <div className="home">
        <h1 className="primary-title">Swipe Right®</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Đăng xuất" : "Tạo tài khoản"}
        </button>

        {showModal && (
          <AuthModal setShowModal={setShowModal} isRegister={isRegister} />
        )}
      </div>
    </div>
  );
};
export default Home;
