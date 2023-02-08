import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {

  const title = 'My App Logo'

  return (
    < >
      <Header title={title} />
      <Main string={"My in-line Heading"}/>
      <Footer />
    </>
  );
}

export default App;
