import { useQuery } from "@apollo/client";
import logo from "./logo.svg";
import "./App.css";
import { POPULAR_ARTIST } from "./graphql/popularArtist";
import { Header } from './components/Header';

function App() {
  const { loading, error, data } = useQuery(POPULAR_ARTIST, {
    variables: {
      size: 10,
    },
  });

  console.log(data);

  return (
    <div>
      <Header>
        
      </Header>
    </div>
  );
}

export default App;
