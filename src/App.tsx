import './App.scss';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import View from './components/View';

function App() {
  return (
    <div className="App">
      <div className='top'>
      <SideBar/>
      <View/></div>
      <Footer/>
    </div>
  );
}

export default App;
