import './App.scss';
import Navbar from './components/navbar/Navbar';
import OrderMenu from './components/order-menu/OrderMenu';
import Order from './components/order/Order';

function App() {
  return (
    <div className="App">
       <Navbar />
       <OrderMenu />
       <Order />
    </div>
  );
}

export default App;
