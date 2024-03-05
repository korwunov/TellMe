import './styles/App.css';
import Header from './components/HeaderComponent';
import Reviews from './components/reviews/Reviews';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Reviews/>
      </main>
    </>
  );
}

export default App;
