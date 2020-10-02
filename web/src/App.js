import React, {useLayoutEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row, CardGroup, Card} from "react-bootstrap";
import axios from 'axios';

// to allow cors origin
axios.defaults.adapter = require('axios/lib/adapters/http');


const App = () => {
  const [movies, setMovies]= useState([]);

  const getMovies = async () => {
    const {data} = await axios.get('http://localhost:3000/movies');
    setMovies(data.movies);
  };

  useLayoutEffect(() => {
    getMovies();
  }, []);

  return (
    <Container fluid>
      <Row>
        <h1>Flix App</h1>
      </Row>
      <CardGroup>
         {movies.map( ({title, year, storyline, posterurl}) => (
           <Row>
          <Card key={title}>
            <Card.Img variant="top" src={posterurl} placeholder={'poster image'} style={{maxHeight: '30rem', objectFit: 'contain'}} />
            <Card.Body>
              <Card.Title data-testid='title' >{title}</Card.Title>
              <Card.Text>
                {storyline}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{year}</small>
            </Card.Footer>
          </Card>
             </Row>
        ))}
      </CardGroup>
    </Container>
  );
}

export default App;
