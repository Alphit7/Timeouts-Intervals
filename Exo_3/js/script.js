import { whackAMole } from "./whackAMole.js";
import { divCreation } from "./div__creation.js";
import { score } from "./Scoring.js";

divCreation();
let whackInterval = setInterval(whackAMole, 1000);
