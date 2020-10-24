import React from 'react';
import './App.css';
import request from './requests';

// Components
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchURL={request.fetchNetflixOriginals}
        isLargeRow
      /> 
      <Row title="Top Rated" fetchURL={request.fetchTrending} />
      <Row title="Action Movies" fetchURL={request.fetchActionMoviews} /> 
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMoviews} /> 
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMoviews} /> 
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMoviews} /> 
      <Row title="Docomentaries" fetchURL={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
