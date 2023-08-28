import { useEffect } from 'react';
import Login from './components/Login';
import { useStateProviser } from './utils/StateProvider';
import { reducerCases } from './utils/Contants';
import Spotify from './components/Spotify';

function App() {
  const [{ token }, dispatch] = useStateProviser()
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }

  }, [dispatch, token]);

  return <div>{token ? <Spotify /> : <Login />}</div>;
}

export default App;
