import React from "react";
import './DSThietBi.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";

const DSThietBi = () => {
    return (
        <>

            <div className="kbg-container">
                <Language />
                <div>
                    <h3>Danh sách thiết bị</h3>
                </div>

                <div className="kbg-content">
                    <div className="kbg-option">
                        <select className="kbg-slt1" name="cars" id="cars">
                            <option value="volvo">Tất cả</option>
                            <option value="saab">Công ty TMCP Bách Hóa Xanh</option>
                            <option value="opel">Công ty TNHH XYZ</option>
                            <option value="audi">Công ty TMCP Adora</option>
                        </select>
                    </div>

                    <div className="kbg-option">
                        <select className="kbg-slt2" name="cars" id="cars">
                            <option value="volvo">MAC Address</option>
                            <option value="saab">Memory</option>
                            <option value="opel">SKU/ID</option>
                            <option value="volvo">Hạn bảo hành</option>
                            <option value="saab">Tên đăng nhập</option>
                            <option value="opel">Trạng thái</option>
                            <option value="volvo">Địa điểm</option>
                            <option value="saab">Hạn hợp đồng</option>
                        </select>
                    </div>

                    <div className="search-ctn">
                        <form className="example">
                            <input type="text" placeholder="Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac" name="search2"></input>
                            <span className="icon-search"><FiSearch></FiSearch></span>
                        </form>
                    </div>
                </div>

                <div className="kbg-nd">

                </div>
            </div>
        </>
    )
}

export default DSThietBi;