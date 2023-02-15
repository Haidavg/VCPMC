import React from "react";
import './forgot_pass.css';
import logo from '../../assets/images/vcpmc_logo.jpg';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import Language from "../Language/Language";

const ForgotPass = () => {
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
                <a className="title">Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu</a>
                <label>Email</label>

                <input
                    className="input-email"
                    type="text"
                />

                <input className="button" type="submit" value='Xác nhận'
                />
            </form>
            <div>
                <a className="a-bot">Quay lại đăng nhập</a>
            </div>
        </>
    )
}

export default ForgotPass;