import React from "react";
import './Feedback.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";

const Feedback = () => {
    return (
        <>
            <div className="kbg-container">
                <Language />
                <div>
                    <h3>Feedback</h3>
                </div>
            </div>

            <div className="container">
                <label className="label">Tên người dùng</label>
                <label className="name">Ng.Tuyết</label>
                <label className="label-2">Bạn muốn được hỗ trợ vấn đề gì?</label>

                <div className="kbg-option">
                    <select className="kbg-slt">
                        <option className="option">Tài khoản</option>
                        <option className="option">Quản lý doanh thu</option>
                        <option className="option">Bản quyền</option>
                        <option className="option">Khác</option>
                    </select>
                </div>
                <label className="label-2">Nội dung</label>
                <input className="input" type="text" placeholder="Nhập nội dung"></input>
            </div>

            <input className="btn" type="button" value="Gửi" />

            <MenuBar />
        </>
    )
}

export default Feedback;