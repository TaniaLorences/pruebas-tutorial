import './App.css';
import ProviderMio from './PruebaQuinielas/ProviderMio';
import PruebaQuinielas from './PruebaQuinielas/PruebaQuinielas';

function App() {
  return (
    <>
      {/* <h1>Learn react</h1> */}
      <ProviderMio>
        <PruebaQuinielas></PruebaQuinielas>
      </ProviderMio>

      </>
  );
}

export default App;