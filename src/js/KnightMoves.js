import { Knight } from "./Knight"

Knight.prototype.move1 = function (currentPosition){
if (!this.position) {
this.position = currentPosition    
}    
this.position = currentPosition
let [X,Y] = this.position
X += 2;
Y =+ 1;
if (X > 8 || Y > 8 || X < 0 || Y < 0) {
return null    
}
let arr = [X,Y]
return arr
}
Knight.prototype.nextMove = function (currentPosition, endPosition) {
  this.position = currentPosition;
  const possiblePosition = [];

  const PossibleNextMove = [
    [ 2,  1],
    [ 2, -1],
    [-2,  1],
    [-2, -1],
    [ 1,  2],
    [ 1, -2],
    [-1,  2],
    [-1, -2]
  ];

  PossibleNextMove.forEach(([A, B]) => {
    let [X, Y] = this.position;  
    X += A;
    Y += B;

    if (X >= 0 && X <= 7 && Y >= 0 && Y <= 7) {
      possiblePosition.push([X, Y]);
    }
  });

  return possiblePosition;
};
Knight.prototype.knightMoves = function (currentPosition, endPosition) {
  let previousPositionMap = new Map()
  let visited = new Set();
  let queqe = [currentPosition];
  visited.add(currentPosition.join(","))

  while (queqe.length > 0) {
    let currentNode = queqe.shift();

    let NextMoves = this.nextMove(currentNode, endPosition);

    NextMoves.forEach((element) => {
      if (!visited.has(element.join(","))) {
        visited.add(element.join(","))
        queqe.push(element);
        previousPositionMap.set(element.join(","),currentNode) // stores [child, parent]
        // next we can find the endposition child, retraces its parent use a queqe or recurision to buld the chain?
      }
    });


    if (currentNode.join(",") === endPosition.join(",")) {
     let path = [endPosition]
     let node = previousPositionMap.get(endPosition.join())
     while (node) {
        path.push(node)
        node = previousPositionMap.get(node.join(","))
     }
     return path.reverse()
    }
  }
};

