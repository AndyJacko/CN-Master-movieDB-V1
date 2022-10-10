const MovieDB = require("./utils/movieDB");

const app = (args) => {
  const newMovieDB = new MovieDB();

  switch (args[2]) {
    case "add":
      newMovieDB.add(args[3]);

      if (args[4]) {
        newMovieDB.add(args[4]);
      }

      if (args[5]) {
        newMovieDB.add(args[5]);
      }

      newMovieDB.viewmovies();
      break;

    case "view":
      newMovieDB.viewmovie(args[3]);

      if (args[4]) {
        newMovieDB.viewmovie(args[4]);
      }

      if (args[5]) {
        newMovieDB.viewmovie(args[5]);
      }
      break;

    case "viewall":
      newMovieDB.viewmovies();
      break;

    case "modify":
      newMovieDB.viewmovie(args[3]);
      newMovieDB.modify(args[3], args[4]);
      newMovieDB.viewmovie(args[3]);
      break;

    case "delete":
      newMovieDB.viewmovies();
      newMovieDB.delete(args[3]);
      newMovieDB.viewmovies();
      break;
  }
};

app(process.argv);
