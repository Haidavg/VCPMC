import React from "react";
import './MenuInfor.css';

import { RxExit } from "react-icons/rx";
import { FiEdit, FiLock } from "react-icons/fi";

import lg from '../../assets/images/vcpmc_logo.jpg';

function MenuInfor() {
    return (
        <>
            <div className="menu-container">
                <div className="sub-menu">
                    <FiEdit className="icon-menu"></FiEdit>
                    <span className="span-menu">Sửa thông tin</span>
                </div>

                <div className="sub-menu">
                    <FiLock className="icon-menu"></FiLock>
                    <span className="span-menu">Đổi mật khẩu</span>
                </div>

                <div className="sub-menu">
                    <RxExit className="icon-menu"></RxExit>
                    <span className="span-menu">Đăng xuất</span>
                </div>
            </div>

            {/* <div className="MenuBarMN">
                <div className="dropdownMN">
                    <button className="btnMN">Button</button>
                    <div className="dropdown-contentMN">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default MenuInfor;