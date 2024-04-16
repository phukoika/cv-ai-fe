import React from "react";
import bg from "../assets/auth_bg.png";
const LoginPage = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-1 justify-center">
        <div className="header">
          <h1 className="text-primary text-xl font-medium">
            Chào mừng bạn đã quay trở lại
          </h1>
          <p className="text-sm">
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
            tưởng
          </p>
        </div>
        <div className="form"></div>
      </div>
      <div className="w-[500px]">
        <img src={bg} alt="auth_bg" className="w-full h-screen object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
