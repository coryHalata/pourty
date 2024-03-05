// poetry.js

class Poet {
  constructor() {
    this.nouns = ['moon', 'heart', 'sun', 'star', 'sky'];
    this.adjectives = ['beautiful', 'bright', 'mysterious', 'shining', 'glorious'];
    this.verbs = ['shines', 'glows', 'dances', 'whispers', 'sparkles'];
  }

  generateLine() {
    const noun = this.nouns[Math.floor(Math.random() * this.nouns.length)];
    const adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
    const verb = this.verbs[Math.floor(Math.random() * this.verbs.length)];
    return `${adjective} ${noun} ${verb}.`;
  }

  generatePoem(lines = 4) {
    let poem = '';
    for (let i = 0; i < lines; i++) {
      poem += this.generateLine() + '\n';
    }
    return poem;
  }
}

module.exports = Poet;
