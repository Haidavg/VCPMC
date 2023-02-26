import React from "react";
import './TTTacPham.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";

const TTTacPham = () => {
    return (
        <>

            <div className="kbg-container">
                <Language />

                <div>
                    <h3>Thông tin tác phẩm</h3>
                </div>

                <div>
                    <h5>Thể loại tác phẩm</h5>
                </div>

                <div className="kbg-nd">

                </div>
            </div>

            <div className="menu-container">
                <div className="sub-menu">
                    <FiEdit className="icon-menu"></FiEdit>
                    <span className="span-menu">Chỉnh sửa</span>
                </div>
            </div>

            <MenuBar />
        </>
    )
}

export default TTTacPham;