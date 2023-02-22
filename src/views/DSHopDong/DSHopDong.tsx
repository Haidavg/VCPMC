import React from "react";
import './DSHopDong.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";

const DSHopDong = () => {
    return (
        <>

            <div className="kbg-container">
                <Language />

                <div>
                    <h3>Danh sách hợp đồng</h3>
                </div>

                <div className="kbg-content">
                    <div className="kbg-option">
                        <a className="kbg-a">Quyền sở hữu: </a>
                        <select className="kbg-slt" name="cars" id="cars">
                            <option >Tất cả</option>
                            <option value="volvo">Người biểu diễn</option>
                            <option value="saab">Nhà sản xuất</option>
                        </select>
                    </div>

                    <div className="kbg-option">
                        <a className="kbg-a">Hiệu lực hợp đồng: </a>
                        <select className="kbg-slt" name="cars" id="cars">
                            <option value="volvo">Tất cả</option>
                            <option value="saab">Mới</option>
                            <option value="opel">Còn thời hạn</option>
                            <option value="opel">Hết hạn</option>
                            <option value="opel"></option>
                        </select>
                    </div>

                    <div className="search-ctn">
                        <form className="example">
                            <input type="text" placeholder="Tên hợp đồng, số hợp đồng, người ủy quyền..." name="search2"></input>
                            <span className="icon-search"><FiSearch></FiSearch></span>
                        </form>
                    </div>
                </div>

                <div className="kbg-nd">

                </div>
            </div>

            <div className="menu-container">
                <div className="sub-menu">
                    <FiEdit className="icon-menu"></FiEdit>
                    <span className="span-menu">Quản lý phê duyệt</span>
                </div>
            </div>

            <MenuBar />
        </>
    )
}

export default DSHopDong;