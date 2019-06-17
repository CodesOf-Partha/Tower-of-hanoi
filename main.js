var popped,public_id; var i, j;
var stack1 = [[3, 2, 1], [120, 110, 100]], stack2 = [[], [121, 111, 101]], stack3 = [[], [122, 112, 102]];
flag = 2;
function myFunc(id, val) {
  if(stack3[0].length==3){
    $('.modal').modal();
    reset();
  }
  if (flag == 2) {
    if (id == 120 || id == 110 || id == 100) {
      public_id=id;
      len=stack1[0].length-1;
      popped = stack1[0].pop();
      document.getElementById(stack1[1][len]).innerHTML = "<img src='img/dummy.png' class='img-fluid'>";
    }
    if (id == 121 || id == 111 || id == 101) {
      public_id=id;
      len=stack2[0].length-1;
      popped = stack2[0].pop();
      document.getElementById(stack2[1][len]).innerHTML = "<img src='img/dummy.png' class='img-fluid'>";
    }
    if (id == 122 || id == 112 || id == 102) {
      public_id=id;
      len=stack3[0].length-1;
      popped = stack3[0].pop();
      document.getElementById(stack3[1][len]).innerHTML = "<img src='img/dummy.png' class='img-fluid'>";
    }
    flag -= 1;
  } else {
    if (id == 120 || id == 110 || id == 100) {
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
    if (id == 121 || id == 111 || id == 101) {
      if(stack2[0].length==0){stack2[0].push(popped);}
      else if (popped < stack2[0][stack2[0].length - 1]) {
        stack2[0].push(popped);
      }
      else if (popped > stack2[0][stack2[0].length - 1]){
        recover(public_id,popped);
        alert("Wrong move");
      }
      for (i = 0; i < stack2[0].length; i++) {
        for (j = 0; j < stack2[0].length; j++) {
          if (i == j) {
            document.getElementById(stack2[1][i]).innerHTML = "<img src='img/" + stack2[0][i] + ".png' class='img-fluid'>";
          }
        }
      }
    }
    if (id == 122 || id == 112 || id == 102) {
      if(stack3[0].length==0){stack3[0].push(popped);}
      else if (popped < stack3[0][stack3[0].length - 1]) {
        stack3[0].push(popped);
      }
      else if (popped > stack3[0][stack3[0].length - 1]){
        recover(public_id,popped);
        alert("Wrong move");
      }
      for (i = 0; i < stack3[0].length; i++) {
        for (j = 0; j < stack3[0].length; j++) {
          if (i == j) {
            document.getElementById(stack3[1][i]).innerHTML = "<img src='img/" + stack3[0][i] + ".png' class='img-fluid'>";
          }
        }
      }
    }
    flag = 2;
  }
}

function recover(public_id,popped){
  document.getElementById(public_id).innerHTML = "<img src='img/" + popped + ".png' class='img-fluid'>";
  if (public_id == 120 || public_id == 110 || public_id == 100) {
    stack1[0].push(popped);
  }
  if (public_id== 121 || public_id == 111 || public_id == 101) {
    stack2[0].push(popped);
  }
  if (public_id == 122 || public_id == 112 || public_id == 102) {
    stack3[0].push(popped);
  }
}

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
