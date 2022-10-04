/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let domainGenerator = (pronoun, adj, noun) => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let r = 0; r < noun.length; r++) {
        console.log(pronoun[i] + adj[j] + noun[r] + ".es");
      }
    }
  }
};
domainGenerator(pronoun, adj, noun);
