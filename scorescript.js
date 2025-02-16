

import {getScore} from './quizscript.js';
import { greet } from './quizscript.js';


alert(`dcsd`);
    function showScore() {
         alert(`You scored ${getScore()}`);
        }
    //showScore();
        const element = document.getElementById("score-text");
        const storedScore = localStorage.getItem("quizScore");
        alert(storedScore);
        element.innerHTML = storedScore;
    