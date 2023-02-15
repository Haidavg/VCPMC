import './App.css';
import Login from './views/Login/login';
import ForgotPass from './views/ForgotPassword/forgot_pass';
import MenuBar from './views/MenuBar/MenuBar';
import KhoBanGhi from './views/KhoBanGhi/KhoBanGhi';
import Playlist from './views/Playlist/Playlist';
import DSThietBi from './views/DSThietBi/DSThietBi';
import Infor from './views/Infor/Infor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login /> */}
        {/* <ForgotPass /> */}
        {/* <KhoBanGhi /> */}
        {/* <Playlist /> */}
        {/* <DSThietBi /> */}
        {/* <Infor /> */}
        <MenuBar />
      </header>
    </div>
  );
}

export default App;
