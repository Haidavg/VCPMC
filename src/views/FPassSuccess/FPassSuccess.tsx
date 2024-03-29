import React from "react";
import './FPassSuccess.css';
import logo from '../../assets/images/vcpmc_logo.jpg';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import Language from "../Language/Language";

const FPassSuccess = () => {
    return (
        <>
            <Language />

            <div>
                <img src={logo} className="logo" />
            </div>
            <form className="login-container">
                <p>
                    Khôi phục mật khẩu
                </p>
                <a className="title">Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm tra mail.</a>
                <a className="title">Click vào đường link được đính kèm trong mail để chuyển đến trang đặt lại mật khẩu.</a>

            </form>
            <div>
                <a className="a-bot">Quay lại đăng nhập</a>
            </div>
        </>
    )
}

export default FPassSuccess;