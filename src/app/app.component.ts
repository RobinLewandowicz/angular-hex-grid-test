import { Component, VERSION } from '@angular/core';
import { Hex } from './hex';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}

function mainCtrl() {
  var main = this;
  var hexgridCols = 60;
  var hexgridRows = 55;
  main.hexes = hexes(hexgridRows, hexgridCols);
  main.height = 17.32 * hexgridRows + 8.66;
  main.width = (hexgridCols / 2) * 30 + 5;

  /////////////////////////////////
  function hexes(rows, cols) {
    var hexNumbers = [];
    for (var j = 1; j <= rows; j++) {
      for (var i = 1; i <= cols; i++) {
        hexNumbers.push([i, j]);
      }
    }
    return hexNumbers;
  }

}

function hexGrid() {
  return {
    restrict: 'E',
    type: 'svg',
    templateNamespace: 'svg',
    templateUrl: 'hexgridtemplate.tpl',
    replace: false,
    scope: {
      rows: '@',
      cols: '@'
    },
    controller: function(scope, element, attrs) {
      var hexGrid = this;
      hexGrid.rows = attrs.rows;
      hexGrid.cols = attrs.cols;
      hexGrid.hexes = hexes(attrs.rows, attrs.cols);
      hexGrid.hexNumber = hexNumber;
      hexGrid.translation = translation;
      hexGrid.height = 17.32 * attrs.rows + 8.66;
      hexGrid.width = (attrs.cols / 2) * 30 + 5;

      /////////////////////////////////
      function hexes(rows, cols) {
        var hexNumbers = [];
        for (var j = 1; j <= rows; j++) {
          for (var i = 1; i <= cols; i++) {
            hexNumbers.push([i, j]);
          }
        }
        return hexNumbers;
      }

      function hexNumber(hex) {
        //takes a hex (pair of integers)and outputs a standard hex number
        var pad = function(num) {
          return num.toString().length === 1 ? '0' + num : num;
        };
        return pad(hex[0]).toString() + pad(hex[1]).toString();
      }

      function translation(hex) {
        //takes a hex and gives a translation string for it's positioning in an SVG
        return (
          hex[0] * 15 -
          5 +
          ',' +
          (hex[0] % 2 ? hex[1] * 17.32 - 8.66 : hex[1] * 17.32)
        );
      }
    },
    controllerAs: 'hexGrid',
    //transclude:true,
    link: function(scope, element, attrs) {
      element.bind('mouseenter', function() {
        alert(attrs.rows + ' ' + attrs.cols);
      });
    }
  };
}

/*
function hexGridController(){
  var hexGrid = this
  hexGrid.rows=rows;
  hexGrid.cols=cols;
  hexGrid.hexes = hexes(rows,cols);
  hexGrid.hexNumber = hexNumber;
  hexGrid.translation = translation;
  hexGrid.height = 17.32 * rows + 8.66;
  hexGrid.width = cols / 2 * 30 + 5;

  /////////////////////////////////
  function hexes(rows,cols) {

    var hexNumbers = [];
    for (var j = 1; j <= rows; j++) {
      for (var i = 1; i <= cols; i++) {
        hexNumbers.push([i, j]);
      }
    }
    return hexNumbers;
  }

  function hexNumber(hex) {
    //takes a hex (pair of integers)and outputs a standard hex number
    var pad = function(num) {
      return num.toString().length === 1 ? '0' + num : num;
    };
    return pad(hex[0]).toString() + pad(hex[1]).toString();
  }

  function translation(hex) {
    //takes a hex and gives a translation string for it's positioning in an SVG
    return (hex[0] * 15 - 5) + "," + (hex[0] % 2 ? hex[1] * 17.32 - 8.66 : hex[1] * 17.32);
  }
  
}
*/

function hex() {
  return {
    //type             : 'svg',
    templateNamespace: 'svg',
    replace: true,
    restrict: 'E',
    //scope            : true,
    templateUrl: 'hextemplate.tpl',
    link: function(scope, element) {
      element.bind('click', function() {
        alert(element.text().trim());
      });
    }
  };
}
