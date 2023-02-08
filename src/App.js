import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

function App() {

  const title = 'My App Logo'
  return (
    < >
      <Header title={title} />
      <About />
      <Footer />
    </>
  );
}

export default App;
