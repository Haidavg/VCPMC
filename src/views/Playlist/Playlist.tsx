import React from "react";
import './Playlist.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";

const Playlist = () => {
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
                    <h3>Playlist</h3>
                </div>



                <div className="kbg-content">
                    <div className="search-ctn">
                        <form className="example" action="/action_page.php" >
                            <input type="text" placeholder="Tên chủ đề, người tạo,... " name="search2"></input>
                            <span className="icon-search"><FiSearch></FiSearch></span>
                        </form>
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

export default Playlist;