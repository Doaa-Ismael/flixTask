var express = require('express');
var router = express.Router();


const movies = [
  {
    "title": "Nyckeln till frihet",
    "year": "1994",
    "genres": [
      "Crime",
      "Drama"
    ],
    "poster": "MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg",
    "contentRating": "15",
    "duration": "PT142M",
    "releaseDate": "1995-03-03",
    "averageRating": 0,
    "originalTitle": "The Shawshank Redemption",
    "storyline": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.                Written by\nJ-S-Golden",
    "actors": [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton"
    ],
    "imdbRating": 9.3,
    "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg"
  },
  {
    "title": "Gudfadern",
    "year": "1972",
    "genres": [
      "Crime",
      "Drama"
    ],
    "poster": "MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg",
    "contentRating": "15",
    "duration": "PT175M",
    "releaseDate": "1972-09-27",
    "averageRating": 0,
    "originalTitle": "The Godfather",
    "storyline": "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.                Written by\nJ. S. Golden",
    "actors": [
      "Marlon Brando",
      "Al Pacino",
      "James Caan"
    ],
    "imdbRating": 9.2,
    "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg"
  },
  {
    "title": "Gudfadern del II",
    "year": "1974",
    "genres": [
      "Crime",
      "Drama"
    ],
    "poster": "MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,351,500_AL_.jpg",
    "contentRating": "15",
    "duration": "PT202M",
    "releaseDate": "1975-07-28",
    "averageRating": 0,
    "originalTitle": "The Godfather: Part II",
    "storyline": "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.                Written by\nKeith Loh <loh@sfu.ca>",
    "actors": [
      "Al Pacino",
      "Robert De Niro",
      "Robert Duvall"
    ],
    "imdbRating": 9.0,
    "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,351,500_AL_.jpg"
  },
  {
    "title": "The Dark Knight",
    "year": "2008",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "poster": "MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
    "contentRating": "15",
    "duration": "PT152M",
    "releaseDate": "2008-07-25",
    "averageRating": 0,
    "originalTitle": "",
    "storyline": "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.                Written by\nLeon Lombardi",
    "actors": [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart"
    ],
    "imdbRating": 9.0,
    "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg"
  },
  {
    "title": "12 edsvurna m\u00e4n",
    "year": "1957",
    "genres": [
      "Crime",
      "Drama"
    ],
    "poster": "MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
    "contentRating": "15",
    "duration": "PT96M",
    "releaseDate": "1957-07-29",
    "averageRating": 0,
    "originalTitle": "12 Angry Men",
    "storyline": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room.                Written by\npjk <PETESID@VNET.IBM.COM>",
    "actors": [
      "Henry Fonda",
      "Lee J. Cobb",
      "Martin Balsam"
    ],
    "imdbRating": 8.9,
    "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg"
  },
];

router.get('/', function(req, res, next) {
  res.status(200).json({movies});
});

module.exports = router;
