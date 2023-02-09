import { useState } from 'react';

import Header from './components/Header';


function App() {
  const brand = 'We are the best!';

  return (
    <div>
      <Header brand={brand} />

    </div>
  );
}

export default App;


