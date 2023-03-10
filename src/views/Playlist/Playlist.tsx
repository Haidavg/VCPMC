import React from "react";
import './Playlist.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { RiPlayListAddFill } from "react-icons/ri";

const Playlist = () => {
    return (
        <>
            <div className="kbg-container">
                <Language />

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

            <div className="menu-container">
                <div className="sub-menu">
                    <RiPlayListAddFill className="icon-menu"></RiPlayListAddFill>
                    <span className="span-menu">Thêm playlist</span>
                </div>
            </div>

            <MenuBar />
        </>
    )
}

export default Playlist;