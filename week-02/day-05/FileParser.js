const fs = require('fs');

class PuzzleReader {
  constructor(file) {
    this.file = file;
    this.matrix = [];
    this.open(this.file);
  }


  open(fileName, delimiter = '\n') {
    const data = fs.readFileSync(this.file, 'utf-8');
    const dataArry = data.split(delimiter);
    this.matrix = dataArry.map((item) => item.split(' ').map((char) => ((char === '_') ? undefined : Number(char))));
  }

  toString() {
    let rst = '';
    this.matrix.forEach((item) => {
      rst += item.map((char) => (char || '_')).join(' ');
      rst += '\n';
    });
    return rst;
  }

  toArray() {
    return this.matrix;
  }
}

module.exports = { PuzzleReader };
