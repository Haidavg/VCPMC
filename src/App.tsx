import './App.css';
import Login from './views/Login/login';
import ForgotPass from './views/ForgotPassword/forgot_pass';
import MenuBar from './views/MenuBar/MenuBar';
import KhoBanGhi from './views/KhoBanGhi/KhoBanGhi';
import Playlist from './views/Playlist/Playlist';
import DSThietBi from './views/DSThietBi/DSThietBi';
import Infor from './views/Infor/Infor';
import EditInfor from './views/EditInfo/EditInfor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuInfor from './views/MenuInfor/MenuInfor';
import DSLichPhat from './views/DSLichPhat/DSLichPhat';
import DSHopDong from './views/DSHopDong/DSHopDong';
import DsHdKhaiThac from './views/DsHdKhaiThac/DsHdKhaiThac';
import DsUyQuyen from './views/DSUyQuyen/DsUyQuyen';
import DsDvSd from './views/DSDvSd/DsDvSd';
import LSDoiSoat from './views/LichSuDoiSoat/LSDoiSoat';
import PPDoanhThu from './views/PPDoanhThu/PPDoanhThu';
import DSNguoiDung from './views/DSNguoiDung/DSNguoiDung';
import TTTacPham from './views/TTTacPham/TTTacPham';
import ChuKyDSoat from './views/ChuKyDSoat/ChuKyDSoat';
import TaiApp from './views/TaiApp/TaiApp';
import Feedback from './views/Feedback/Feedback';
import HDUyQuyenBH from './views/HDUyQuyenBH/HDUyQuyenBH';
import ThemHDUQ from './views/ThemHDUQ/ThemHDUQ';
import ThemHDUQ2 from './views/ThemHDUQ2/ThemHDUQ2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login /> */}
        {/* <ForgotPass /> */}

        {/* <KhoBanGhi /> */}

        {/* <Infor /> */}
        {/* <EditInfor /> */}

        {/* <Playlist /> */}

        {/* <DSLichPhat /> */}

        {/* <DSHopDong /> */}

        <HDUyQuyenBH />
        {/* <ThemHDUQ /> */}
        {/* <ThemHDUQ2 /> */}

        {/* <DsHdKhaiThac /> */}
        {/* <DSThietBi /> */}
        {/* <DsUyQuyen /> */}
        {/* <DsDvSd /> */}

        {/* <LSDoiSoat /> */}
        {/* <PPDoanhThu /> */}

        {/* <DSNguoiDung /> */}
        {/* <TTTacPham /> */}
        {/* <ChuKyDSoat /> */}

        {/* <TaiApp /> */}
        {/* <Feedback /> */}

      </header>

      <ToastContainer
        position="bottom-center"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
