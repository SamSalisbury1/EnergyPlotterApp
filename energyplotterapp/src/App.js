import './App.css';
import Greeting from './Components/Greeting';
import AddEntryForm from './Components/AddEntryForm';
import EnergyGraph from './Components/EnergyGraph';

function App() {
  // let consumptionData = [{}]

  return (
    <>
      <div className='content-container'>
        <Greeting />
      </div>
      <div className='content-container'>
        <AddEntryForm />
      </div>
      <div className='content-container'>
        <EnergyGraph />
      </div>
    </>
  );
}

export default App;
