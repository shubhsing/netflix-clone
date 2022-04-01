import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
    <Nav/>
    <Banner/>
     <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
     <Row title="TRENDING" fetchURL={requests.fetchTrending}/>
     <Row title="TOP RATED" fetchURL={requests.fetchTopRated}/>
     <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies}/>
     <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies}/>
     <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies}/>
     <Row title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies}/>
     <Row title="DOCUMANTARIES" fetchURL={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
