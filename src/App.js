import { useEffect } from 'react';
import './App.css';
import { useTelegram } from 'src/components/hooks/useTelegram';
import Header from 'src/components/header/header'; 

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
