
import './App.css';
import Item from './components/Bottom/Item';
import EnrtyForm from './components/Middle/EntryForm./EnrtyForm';
import Header from './components/Top/Header/Header';
import CartProvider from './store/CartProvider';
import ItemProvider from './store/ItemProvider';


function App() {


  return (
    <CartProvider>
      <ItemProvider ><Header/></ItemProvider>
    <EnrtyForm />
    <ItemProvider><Item /></ItemProvider>
    
    </CartProvider>
  );
}

export default App;
