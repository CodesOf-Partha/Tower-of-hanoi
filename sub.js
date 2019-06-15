
var a = [3,2,1],

b = [],

c = [];



function moveDisk(n, src, dst){

  var mover = src.pop();

  dst.push(mover);

}



function moveTower(n, src, dst) {

  var tmp;

  if (src === a && dst === b || src === b && dst === a) {

    tmp = c;

    console.log('moving ' + n + ' from a to b');

  } else if (src === b && dst === c || src === c && dst === b) {

    tmp = a;

    console.log('moving ' + n + ' from b to c');

  } else if (src === a && dst === c || src === c && dst === a) {

    tmp = b;

    console.log('moving ' + n + ' from a to c');

  }



  if (n === 1) {

    moveDisk(1, src, dst);

    return;

  }



  moveTower(n-1, src, tmp);

  moveDisk(n, src, dst);

  moveTower(n-1, tmp, dst);





}



console.log('start: ', a, b, c);

moveTower(3, a, c);

console.log('end: ', a, b, c);
