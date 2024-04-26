let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function generateDomainNames(pronoun, adj, noun) {
  let domainNames = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domainNames.push(`${pronoun[i]}${adj[j]}${noun[k]}.com`);
        domainNames.push(`${pronoun[i]}${adj[j]}${noun[k]}.net`);
        domainNames.push(`${pronoun[i]}${adj[j]}${noun[k]}.us`);
        domainNames.push(`${pronoun[i]}${adj[j]}${noun[k]}.io`);
        domainNames.push(`${pronoun[i]}${adj[j]}${noun[k]}.org`);
      }
    }
  }
  return domainNames;
}

let domainNames = generateDomainNames(pronoun, adj, noun);
console.log(domainNames);
