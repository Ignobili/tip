import './App.css';
import Calculator from './components/Calculator';
import { motion } from 'framer-motion';
function App() {
  return (
    <motion.div animate={{scale:[0,1]}} className='parentcenter'>
      <div className='center'>
        <p className='splitter'>SPLI<br></br>TTER</p>
      </div>
      <div className='pt-10'>
      <Calculator/>
      </div>
  </motion.div>
  );
}

export default App;