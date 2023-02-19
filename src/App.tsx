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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        {/* <ForgotPass /> */}
        {/* <KhoBanGhi /> */}
        {/* <Playlist /> */}
        {/* <DSThietBi /> */}
        {/* <Infor /> */}
        {/* <EditInfor /> */}
        {/* <MenuBar /> */}
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
