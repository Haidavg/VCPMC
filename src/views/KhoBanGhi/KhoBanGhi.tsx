import React from "react";
import './KhoBanGhi.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";

const KhoBanGhi = () => {
    return (
        <>

            <div className="kbg-container">
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
                    <h3>Kho bản ghi</h3>
                </div>

                <div className="search-ctn">
                    <form className="example" action="/action_page.php" >
                        <input type="text" placeholder="Tên bản ghi, ca sĩ,... " name="search2"></input>
                        <span className="icon-search"><FiSearch></FiSearch></span>
                    </form>
                </div>

                <div className="kbg-content">
                    <div className="kbg-option">
                        <a className="kbg-a">Thể loại: </a>
                        <select className="kbg-slt" name="cars" id="cars">
                            <option value="volvo">Tất cả</option>
                            <option value="saab">POP</option>
                            <option value="opel">EDM</option>
                            <option value="audi">Ballad</option>
                        </select>
                    </div>

                    <div className="kbg-option">
                        <a className="kbg-a">Định dạng: </a>
                        <select className="kbg-slt" name="cars" id="cars">
                            <option value="volvo">Tất cả</option>
                            <option value="saab">Âm thanh</option>
                            <option value="opel">Video</option>
                        </select>
                    </div>

                    <div className="kbg-option">
                        <a className="kbg-a">Thời hạn sử dụng: </a>
                        <select className="kbg-slt" name="cars" id="cars">
                            <option value="volvo">Tất cả</option>
                            <option value="saab">Còn thời hạn</option>
                            <option value="opel">Hết hạn</option>
                        </select>
                    </div>

                    <div className="kbg-option">
                        <a className="kbg-a">Trạng thái: </a>
                        <select className="kbg-slt" name="cars" id="cars">
                            <option value="volvo">Tất cả</option>
                            <option value="saab">Duyệt bởi người dùng</option>
                            <option value="opel">Duyệt tự động</option>
                        </select>
                    </div>

                    <div className="kbg-icons">
                        <div id="icon1">
                            <AiOutlineUnorderedList></AiOutlineUnorderedList>
                        </div>

                        <div id="icon2">
                            <AiOutlineAppstore></AiOutlineAppstore>
                        </div>
                    </div>
                </div>

                <div className="kbg-nd">

                </div>
            </div>
        </>
    )
}

export default KhoBanGhi;