import { useState } from 'react';
import swData from './data.json';

import Header from './components/Header';
import Main from './components/Main';
import Character from './components/Character';

function App() {
  const brand = 'We are the best!';
  const [showMain, setShowMain] = useState(true);

  const toggleMain = () => setShowMain(!showMain);

  return (
    <div>
      <Header brand={brand} />

      {showMain && <Main />}

      <button onClick={toggleMain}>Toggle Main</button>

      <section>

        <ul>
          {swData.map((charObj, index) => (
            <Character key={index} name={charObj.name} />
          ))}
        </ul>

      </section>

    </div>
  );
}

export default App;


