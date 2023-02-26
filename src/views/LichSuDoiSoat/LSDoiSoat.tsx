import React from "react";
import './LSDoiSoat.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import { TbFileExport } from "react-icons/tb";

const LSDoiSoat = () => {
    return (
        <>

            <div className="kbg-container">
                <Language />

                <div>
                    <h3>Lịch sử đối soát doanh thu</h3>
                </div>

                <div className="kbg-content">
                    <div className="kbg-option">
                        <a className="kbg-a">Thời gian thực hiện: </a>
                        <input className="kbg-date" type="date" name="date" value="2023-02-01"></input>
                    </div>

                    <div className="search-ctn">
                        <form className="example">
                            <input type="text" placeholder="Nhập tên tài khoản quản trị" name="search2"></input>
                            <span className="icon-search"><FiSearch></FiSearch></span>
                        </form>
                    </div>
                </div>

                <div>
                    <h5>Danh sách hợp đồng khai thác đã đối soát</h5>
                </div>

                <div className="kbg-nd">

                </div>
            </div>

            <div className="menu-container">
                <div className="sub-menu">
                    <TbFileExport className="icon-menu"></TbFileExport>
                    <span className="span-menu">Xuất file</span>
                </div>
            </div>

            <MenuBar />
        </>
    )
}

export default LSDoiSoat;