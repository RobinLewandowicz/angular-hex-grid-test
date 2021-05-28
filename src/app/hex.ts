export class Hex {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  equals(h: Hex) {
    if (h) {
      return h.x == this.x && h.y == this.y;
    }
    return false;
  }
}

export const hexesTest = [
  {
    x: 0,
    y: 0
  },
  {
    x: 0,
    y: 1
  },
  {
    x: 1,
    y: 0
  },
  {
    x: 1,
    y: 1
  },
  {
    x: 2,
    y: 0
  },
  {
    x: 2,
    y: 1
  },
  {
    x: 2,
    y: 2
  },
  {
    x: 3,
    y: 0
  },
  {
    x: 3,
    y: 1
  }
];
