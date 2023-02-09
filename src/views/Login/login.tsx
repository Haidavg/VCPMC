import React from "react";
import './login.css';
import logo from '../../assets/images/vcpmc_logo.jpg';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import ForgotPass from "../ForgotPassword/forgot_pass";


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
                <div className="dropdown">
                    <div className="dropbtn" >
                        <a className="a-top">Tiếng Việt</a>
                        <img src={logo2} className="logo2" />
                    </div>
                    <div className="dropdown-content">
                        <div className="drop-title">
                            <a className="a-top">Tiếng Việt</a>
                            <img src={logo2} className="vn" />
                        </div>
                        <div className="drop-title">
                            <a className="a-top">English</a>
                            <img src={eng} className="eng" />
                        </div>
                    </div>
                </div>

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
                        <span className="span" onClick={() => { this.handleShowHidePassword() }}>o</span>
                    </div>

                    <div className="checkbox-container">
                        <input type="checkbox" className="checkbox"></input>
                        <label>Ghi nhớ đăng nhập</label>
                    </div>

                    <input className="button" type="submit" value='Đăng nhập'
                    />
                </form>

                <div>
                    <span className="a-bot" onClick={ForgotPass}>Quên mật khẩu?</span>
                </div>
            </>
        )
    }
}

export default Login;