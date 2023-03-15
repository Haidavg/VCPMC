import React from "react";
import './ThemNgDung.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";

import { SlCloudUpload } from "react-icons/sl";
import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

const ThemNgDung = () => {
    return (
        <>

            <div className="kbg-container">
                <Language />

                <div className="h3">
                    <h3>Thêm người dùng</h3>
                </div>

                <div className="full-container">
                    <div className="box-container">
                        <div className="box-1">
                            <div className="lb-1">
                                <label className="lb-1">Tên người dùng</label>
                                <input className="input-z" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label>Email</label>
                                <input className="input-z" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Vai trò</label>
                                <select className="kbg-slt-2">
                                    <option className="option-2">Super Admin</option>
                                    <option className="option-2">Group Admin</option>
                                    <option className="option-2">Sub - user</option>
                                    <option className="option-2">Content Manager</option>
                                </select>
                            </div>
                        </div>

                        <div className="box-2">
                            <div className="lb-1">
                                <label className="lb-1">Tên đăng nhập</label>
                                <input className="input-z" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Mật khẩu</label>
                                <input className="input-z" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Nhập lại mật khẩu</label>
                                <input className="input-z" type="text"></input>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="btn-box">
                <div className="btn-infor">
                    <input className="btn-1" type="button" value="Hủy" />
                    <input className="btn-2" type="button" value="Lưu" />
                </div>
            </div>

        </>
    )
}

export default ThemNgDung;