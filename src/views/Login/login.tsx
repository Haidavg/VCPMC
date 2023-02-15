import React from "react";
import './login.css';
import logo from '../../assets/images/vcpmc_logo.jpg';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import ForgotPass from "../ForgotPassword/forgot_pass";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Language from "../Language/Language";


class Login extends React.Component {
    state = {
        usename: '',
        password: '',
        isShowPassword: false
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <>
                <Language />

                <div>
                    <img src={logo} className="logo" />
                </div>

                <form className="login-container">
                    <p>Đăng nhập</p>

                    <label>Tên đăng nhập</label>
                    <input className="input" type="text" />

                    <label>Password</label>
                    <div className="input-container">
                        <input className="input" type={this.state.isShowPassword ? 'text' : 'password'} />
                        <span className="span" onClick={() => { this.handleShowHidePassword() }}><AiOutlineEye></AiOutlineEye></span>
                        {/* <span className="span" onClick={() => { this.handleShowHidePassword() }}><AiOutlineEyeInvisible>           </AiOutlineEyeInvisible></span> */}
                    </div>

                    <label className="container">Ghi nhớ đăng nhập
                        <input type="checkbox" className="checkmark"></input>
                        <span className="checkmark"></span>
                    </label>

                    <input className="button" type="submit" value='Đăng nhập'
                    />
                </form>

                {/* <AiOutlineEyeInvisible></AiOutlineEyeInvisible> */}

                <div>
                    <span className="a-bot" onClick={ForgotPass}>Quên mật khẩu?</span>
                </div>
            </>
        )
    }
}

export default Login;