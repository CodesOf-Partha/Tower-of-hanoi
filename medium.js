var popped,public_id,i,j;

// Three stacks for three tower
// stack=[[disk values],[HTML id]];
var stack1 = [[3, 2, 1], [120, 110, 100]], stack2 = [[], [121, 111, 101]], stack3 = [[], [122, 112, 102]];

// flag=2 => pop operation
// flag=1 => push operation
flag = 2;

// Function which does the stack operation
function myFunc(id, val) {
  if (flag == 2) {
    if (id == 120 || id == 110 || id == 100) {
      public_id=id;
      len=stack1[0].length-1;
      popped = stack1[0].pop();
      document.getElementById(stack1[1][len]).innerHTML = "<img src='img/dummy.png' class='img-fluid'>";
    }
    // The if statement for other two stack id's comes here
    flag -= 1;
  } else {
    if (id == 120 || id == 110 || id == 100) {

      // To check the value of disk before push operation
      if(stack1[0].length==0){stack1[0].push(popped);}
      else if (popped < stack1[0][stack1[0].length - 1]) {
        stack1[0].push(popped);
      }
      else if (popped > stack1[0][stack1[0].length - 1]){
        recover(public_id,popped);
        alert("Wrong move");
      }
      for (i = 0; i < stack1[0].length; i++) {
        for (j = 0; j < stack1[0].length; j++) {
          if (i == j) {
            document.getElementById(stack1[1][i]).innerHTML = "<img src='img/" + stack1[0][i] + ".png' class='img-fluid'>";
          }
        }
      }
    }
    // The if statement for other two stack id's comes here
    flag = 2;
  }

  // To check whether the user won the game
  (function () {
    if(stack3[0].length==3){
      $('.modal').modal();
    }
  })();
}

// To recover the session if the user placed the big disk above small one
function recover(public_id,popped){
  document.getElementById(public_id).innerHTML = "<img src='img/" + popped + ".png' class='img-fluid'>";
  if (public_id == 120 || public_id == 110 || public_id == 100) {
    stack1[0].push(popped);
  }
  // The if statement for other two stack id's comes here
}

// To reset the game without loading the webpage again
function reset(){
    stack1 = [[3, 2, 1], [120, 110, 100]], stack2 = [[], [121, 111, 101]], stack3 = [[], [122, 112, 102]];
    for (i = 0; i < stack1[0].length; i++) {
        for (j = 0; j < stack1[0].length; j++) {
          if (i == j) {
            document.getElementById(stack1[1][i]).innerHTML = "<img src='img/" + stack1[0][i] + ".png' class='img-fluid'>";
          }
        }
      }
    for(i=0;i<3;i++){
        document.getElementById(stack2[1][i]).innerHTML = "<img src='img/dummy.png' class='img-fluid'>";
        document.getElementById(stack3[1][i]).innerHTML = "<img src='img/dummy.png' class='img-fluid'>";
    }
}