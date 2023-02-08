import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {

  const title = 'My App Logo'
  const [showMain, setShowMain] = useState(true);
  
  // creating this anonymous func is best practise for event listeners
  const toggleMain = () => setShowMain(!showMain);

  // if statement can be included instead of the short hand
    // if (showMain) {
      // setShowMain(false)
      // else setShowMain(true)
    
  

  return (
    < >
      <Header title={title} />
      <button onClick={toggleMain}>Main</button>
     
     {showMain && <Main string={"My in-line Heading"}/>}
      <Footer />
    </>
  );
}

export default App;
