import { Component, OnInit } from '@angular/core';

import { Hex, hexesTest } from '../hex';

@Component({
  selector: 'app-hexgrid',
  templateUrl: './hexgrid.component.html',
  styleUrls: ['./hexgrid.component.css']
})
export class HexgridComponent implements OnInit {
  width = 8000;
  height = 8000;

  hexSize = 2.5;

  hexTab = this.generateHexes(40, 40);

  selectedHex: Hex = null;

  constructor() {}

  ngOnInit() {}

  generateHexes(rows: number, cols: number) {
    var hexNumbers = [];
    for (var j = 1; j <= rows; j++) {
      for (var i = 1; i <= cols; i++) {
        hexNumbers.push(new Hex(i, j));
      }
    }
    return hexNumbers;
  }

  pad(num: number) {
    return num.toString().length == 1 ? '0' + num : num;
  }

  hexNumber(hex: Hex) {
    //takes a hex (pair of integers)and outputs a standard hex number
    return this.pad(hex.x).toString() + this.pad(hex.y).toString();
  }

  translation(hex: Hex) {
    //takes a hex and gives a translation string for it's positioning in an SVG
    return (
      (hex.x * 15 - 5) * this.hexSize +
      ',' +
      (hex.x % 2 ? hex.y * 17.32 - 8.66 : hex.y * 17.32) * this.hexSize
    );
  }

  hexPoints() {
    //takes a hex and gives a points position string for it's positioning in an SVG
    // "10.0,0 5.0,-8.66 -5.0,-8.66 -10.0,0 -5.0,8.66 5.0,8.66" * hexSize
    return (
      10.0 * this.hexSize +
      ',' +
      0.0 * this.hexSize +
      ' ' +
      5.0 * this.hexSize +
      ',' +
      -8.66 * this.hexSize +
      ' ' +
      -5.0 * this.hexSize +
      ',' +
      -8.66 * this.hexSize +
      ' ' +
      -10.0 * this.hexSize +
      ',' +
      0.0 * this.hexSize +
      ' ' +
      -5.0 * this.hexSize +
      ',' +
      8.66 * this.hexSize +
      ' ' +
      5.0 * this.hexSize +
      ',' +
      8.66 * this.hexSize
    );
  }

  getFillColor(h: Hex) {
    return 'transparent';
  }
  getStrokeColor(h: Hex) {
    return h != null && h == this.selectedHex ? 'red' : 'gray';
  }

  hexClicked(h: Hex) {
    if (this.selectedHex && this.selectedHex.equals(h)) {
      // unselect
      this.selectedHex = null;
    } else {
      // select
      this.selectedHex = h;
    }
  }
}
