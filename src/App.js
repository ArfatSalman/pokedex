import './App.css';
import Container from '@material-ui/core/Container';
import { HomePage } from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Contact } from './pages/Contact';
import { PokemonPage } from './pages/PokemonPage';

function App() {
  return (
    <>
      <Container maxWidth="md" style={{}}>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/pokemon/:name">
            <PokemonPage />
          </Route>
          <Route exact path="/contact-me">
            <Contact />
          </Route>
          <Route>
            <h1>No match</h1>
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
