import React from "react";
import './DsDvSd.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";

const DsDvSd = () => {
    return (
        <>

            <div className="kbg-container">
                <Language />

                <div>
                    <h3>Danh sách đơn vị sử dụng</h3>
                </div>

                <div className="kbg-content">
                    <div className="search-ctn">
                        <form className="example">
                            <input type="text" placeholder="Tên khoản giá trị, số hợp đồng,..." name="search2"></input>
                            <span className="icon-search"><FiSearch></FiSearch></span>
                        </form>
                    </div>
                </div>

                <div className="kbg-nd">

                </div>
            </div>

            <div className="menu-container">
                <div className="sub-menu">
                    <GiCancel className="icon-menu"></GiCancel>
                    <span className="span-menu">Xóa</span>
                </div>
            </div>

            <MenuBar />
        </>
    )
}

export default DsDvSd;