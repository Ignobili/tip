import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className='parentcenter'>
      <div className='center'>
        <p className='splitter'>SPLI<br></br>TTER</p>
      </div>
      <div className='pt-10'>
      <Calculator/>
      </div>
  </div>
  );
}

export default App;