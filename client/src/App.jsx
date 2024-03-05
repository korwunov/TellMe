import './App.css';
import Logo from './components/header/logo';
import Navigation from './components/header/navigation';
import Reviews from './components/reviews/Reviews';
import classes from './styles/header.module.css'

function App() {
  return (
    <>
      <header className={classes.header}>
        <Logo src="logo96.png"/>
        <Navigation className={classes.navList} isAuthorized={true}/>
      </header>
      <main>
        <Reviews/>
      </main>
    </>
  );
}

export default App;
