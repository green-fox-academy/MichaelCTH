/* eslint-disable class-methods-use-this */

// This Sudoku solving algorithm was initially designed by Peter Norvig at http://norvig.com/sudoku.html

class SudokuSolver {
  constructor(matrix = null) {
    this.matrix = matrix;
    this.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    this.cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.rrows = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']];
    this.ccols = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
    this.digits = '123456789';
    this.squares = [];
    this.unitList = [];
    this.units = {};
    this.peers = {};

    this.config();
  }

  cross(param1, param2) {
    const rst = [];
    Array.from(param1).forEach((p1) => Array.from(param2).forEach((p2) => rst.push(p1 + p2)));
    return rst;
  }

  member(item, list) {
    return list.some((i) => item === i);
  }

  config() {
    this.squares = this.cross(this.rows, this.cols);
    this.cols.forEach((c) => this.unitList.push(this.cross(this.rows, c)));
    this.rows.forEach((r) => this.unitList.push(this.cross(r, this.cols)));
    this.rrows.forEach((rs) => this.ccols.forEach(((cs) => {
      this.unitList.push(this.cross(rs, cs));
    })));
    this.squares.forEach((s) => { this.units[s] = []; });
    this.squares.forEach((s) => { this.peers[s] = {}; });
    this.squares.forEach((s) => {
      this.unitList.forEach((u) => {
        if (this.member(s, u)) this.units[s].push(u);
      });
    });

    this.squares.forEach((s) => {
      this.units[s].forEach((u) => {
        u.forEach((s2) => { if (s2 !== s) this.peers[s][s2] = true; });
      });
    });
  }

  parseGrid() {
    let grid2 = '';
    this.matrix.forEach((row) => {
      row.forEach((c) => {
        if ('0123456789'.indexOf(c) >= 0) {
          grid2 += c;
        } else if (c === undefined) {
          grid2 += '_';
        }
      });
    });

    const values = {};
    this.squares.forEach((s) => { values[s] = this.digits; });
    for (let s in this.squares) {
      if (this.digits.indexOf(grid2.charAt(s)) >= 0 && !this.assign(values, this.squares[s], grid2.charAt(s))) {
        return false;
      }
    }
    return values;
  }

  assign(values, sq, dig) {
    let result = true;
    const val = values[sq];
    for (let d = 0; d < val.length; d += 1) {
      if (val.charAt(d) !== dig) {
        result &= (this.eliminate(values, sq, val.charAt(d)) ? true : false);
      }
    }
    return (result ? values : false);
  }

  eliminate(values, sq, dig) {
    if (values[sq].indexOf(dig) === -1) {
      return values;
    }
    values[sq] = values[sq].replace(dig, '');
    if (values[sq].length === 0) {
      return false;
    }

    if (values[sq].length === 1) {
      let result = true;
      for (let s in this.peers[sq]) {
        result &= (this.eliminate(values, s, values[sq]) ? true : false);
      }
      if (!result) {
        return false;
      }
    }

    for (let u of this.units[sq]) {
      let dplaces = [];
      for (let s of u) {
        if (values[s].indexOf(dig) != -1)
          dplaces.push(s);
      }

      if (dplaces.length === 0) {
        return false;
      }

      if (dplaces.length === 1) {
        if (!this.assign(values, dplaces[0], dig)) {
          return false;
        }
      }
    }
    return values;
  }

  dup(obj) {
    return { ...obj };
  }

  search(values) {
    if (!values) {
      return false;
    }
    let min = 10;
    let max = 1;
    let sq = null;
    for (let s of this.squares) {
      if (values[s].length > max)
        max = values[s].length;
      if (values[s].length > 1 && values[s].length < min) {
        min = values[s].length;
        sq = s;
      }
    }

    if (max === 1) {
      return values;
    }
    for (let d = 0; d < values[sq].length; d += 1) {
      const res = this.search(this.assign(this.dup(values), sq, values[sq].charAt(d)));
      if (res) {
        return res;
      }
    }
    return false;
  }

  center(s, w) {
    let excess = w - s.length;
    while (excess > 0) {
      s = (excess % 2) ? s.concat(' ') : ' '.concat(s);
      excess -= 1;
    }
    return s;
  }

  toString(values) {
    let width = 0;
    for (let s of this.squares) {
      if (values[s].length > width) {
        width = values[s].length;
      }
    }
    width += 1;
    let seg = '';
    for (let i = 0; i < width; i += 1) { seg += '---'; }
    const line = '\n'.concat([seg, seg, seg].join('+'));
    let board = '';
    for (let r in this.rows) {
      for (let c in this.cols) {
        board += this.center(values[this.rows[r] + this.cols[c]], width);
        if (c === '2' || c === '5') board += "|";
      }
      if (r === '2' || r === '5') {
        board += line;
      }
      board += '\n';
    }
    board += '\n';
    return board;
  }

  toArray() {
    return this.matrix;
  }

  solve(grid) {
    let values = this.parseGrid(grid);
    values = this.search(values);
    console.log(this.toString(values));
  }
}

module.exports = { SudokuSolver };
