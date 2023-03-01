import React from "react";
import './HDUyQuyenBH.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import { VscAdd } from "react-icons/vsc";

const HDUyQuyenBH = () => {
    return (
        <>

            <div className="kbg-container">
                <Language />

                <div className="h3">
                    <h3>Hợp đồng ủy quyền bài hát - </h3>
                </div>

                <div className="box-1">
                    <div className="lb-1">
                        <label className="lb-1">Số hợp đồng: </label>
                        <input className="input" type="text"></input>
                    </div>

                    <div className="lb-1">
                        <label>Tên hợp đồng: </label>
                        <input className="input" type="text"></input>
                    </div>


                    <div className="lb-1">
                        <label className="lb-1">Ngày hiệu lực: </label>
                        <input className="input-date" type="date"></input>
                    </div>

                    <div className="lb-1">
                        <label className="lb-1">Ngày hết hạn: </label>
                        <input className="input-date" type="date"></input>
                    </div>

                    <div className="lb-1">
                        <label className="lb-1">Tình trạng: </label>
                        <select className="kbg-slt">
                            <option className="option">Đang hiệu lực</option>
                        </select>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HDUyQuyenBH;