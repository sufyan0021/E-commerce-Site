import Action from '../../images/Genre/Action.jpg';
import Adventure from '../../images/Genre/Adventure.jpg';
import Animation from '../../images/Genre/Adventure.jpg';
import Comedy from '../../images/Genre/Comedy.jpg';
import Crime from '../../images/Genre/Crime.jpg';
import Documentary from '../../images/Genre/Documentary.jpg';
import Drama from '../../images/Genre/Drama.jpg';
import Family from '../../images/Genre/Family.jpg';
import Fantasy from '../../images/Genre/Fantasy.jpg';
import History from '../../images/Genre/History.jpg';
import Horror from '../../images/Genre/Horror.jpg';
import Music from '../../images/Genre/Music.jpg';
import Mystery from '../../images/Genre/Mystery.jpg';
import Romance from '../../images/Genre/Romance.jpg';
import Science_Fiction from '../../images/Genre/Science Fiction.jpg';
import TV_Movie from '../../images/Genre/TV Movie.jpg'
import Thriller from '../../images/Genre/Thriller.jpg';
import War from '../../images/Genre/War.jpg';
import Western from '../../images/Genre/Western.jpg';

function imgSelector(genre){
    switch(genre) {
        case "Action":
            return Action;
          break;
        case "Adventure":
            return Adventure;
          break;
        case "Animation":
            return Animation;
          break;
        case "Comedy":
            return Comedy;
          break;
        case "Crime":
            return Crime;
          break;
        case "Documentary":
            return Documentary;
          break;
        case "Drama":
            return Drama;
          break;
        case "Family":
            return Family;
          break;
        case "Fantasy":
        return Fantasy;
          break;
        case "History":
        return History;
          break;
        case "Horror":
        return Horror;
          break;
        case "Music":
        return Music;
          break;
        case "Mystery":
        return Mystery;
          break;
        case "Romance":
        return Romance;
          break;
        case "Science Fiction":
        return Science_Fiction;
          break;
        case "TV Movie":
        return TV_Movie;
          break;
        case "Thriller":
            return Thriller;
          break;
        case "War":
            return War;
          break;
        case "Western":
            return Western;
          break;
        default:
          // code block
      }
}

export default imgSelector;
