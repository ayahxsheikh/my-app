import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {

  const title = 'My App Logo'
  const [showMain, setShowMain] = useState(true);

  return (
    < >
      <Header title={title} />
      <button onClick={() => {
        setShowMain(true)
      }}
      >Main</button>
     
     {showMain && <Main string={"My in-line Heading"}/>}
      <Footer />
    </>
  );
}

export default App;
