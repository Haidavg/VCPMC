import './App.css';
import Login from './views/Login/login';
import ForgotPass from './views/ForgotPassword/forgot_pass';
import MenuBar from './views/MenuBar/MenuBar';
import KhoBanGhi from './views/KhoBanGhi/KhoBanGhi';
import Playlist from './views/Playlist/Playlist';
import DSThietBi from './views/DSThietBi/DSThietBi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={} className="App-logo" alt="logo" /> */}
        {/* <Login /> */}
        {/* <ForgotPass /> */}
        <MenuBar />
        {/* <KhoBanGhi /> */}
        {/* <Playlist /> */}
        <DSThietBi />

      </header>
    </div>
  );
}

export default App;
