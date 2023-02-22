import React from "react";
import './EditInfor.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import { ToastContainer, toast } from 'react-toastify';
import MenuBar from "../MenuBar/MenuBar";

const EditInfor = () => {
    const notify = () => toast.success("Đổi mật khẩu thành công!");
    return (
        <>
            <div className="infor-container">
                <Language />

                <div>
                    <h3>Thông tin cơ bản</h3>
                </div>

                <div className="avt-container">
                    <div className="avt-if"></div>
                    <a className="name-if">Name</a>
                </div>

            </div>

            <div className="form-container">
                <form className="form-infor-container">
                    <div className="input-container">
                        <div className="input-infor">
                            <label className="label">Họ:</label>
                            <input className="input-2" type="text" />

                            <label>Ngày sinh:</label>
                            <input className="input-2" type="date" />
                        </div>

                        <div className="input-infor-2">
                            <label>Tên:</label>
                            <input className="input-2" type="text" />

                            <label>Số điện thoại:</label>
                            <input className="input-2" type="text" />
                        </div>
                    </div>
                    <label>Email:</label>
                    <input className="input" type="email" />

                    <label>Tên đăng nhập:</label>
                    <input className="input" type="text" />

                    <div>
                        <label>Phân quyền:</label>
                        <input className="input-3" type="text" />
                    </div>


                    <div className="btn-infor">
                        <input className="btn-1" type="button" value="Hủy" />
                        <input className="btn-2" type="button" value="Lưu" onClick={notify} />
                    </div>
                </form>
            </div>

            <MenuBar />
        </>
    )
}

export default EditInfor;