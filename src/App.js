import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/header/header'; 

function App() {
  const {onToggleButton, tg} = useTelegram();


  useEffect(() => {
    tg.ready();
  }, [])



  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
