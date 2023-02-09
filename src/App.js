import { useState, useEffect } from 'react';


import Header from './components/Header';
import Main from './components/Main';
import Character from './components/Character';

function App() {
  const brand = 'We are the best!';
  const [showMain, setShowMain] = useState(true);

  const toggleMain = () => setShowMain(!showMain);

  const [swData, setSwData] = useState([]);
  // its set to an empty array because map() will later be able to iterate over the items returned from the fetch request below.

  useEffect(() => {
    fetch("https://swapi.dev/api/people/?page=2")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setSwData(data.results)
    })
  }, [])

  return (
    <div>
      <Header brand={brand} />

      {showMain && <Main />}

      <button onClick={toggleMain}>Toggle Main</button>

      <section>

        <ul>
          {!swData.length ?
          <p>The Data is Loading</p> :
          // add a turenary expression for when loading is long
          swData.map((charObj, index) => (
            <Character key={index} name={charObj.name} />
          ))}
        </ul>

      </section>

    </div>
  );
}

export default App;


