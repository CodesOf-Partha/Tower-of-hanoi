var a=[3,2,1],b=[],c=[]; var popped;
flag=2;
function myFunc(id,val){
if(flag==2){
    if(id==120||id==110||id==100){
        popped=a.pop();
        document.getElementById(id).innerHTML="<img src='img/dummy.png' class='img-fluid'>";
    }
    if(id==121||id==111||id==101){
        popped=b.pop();
        document.getElementById(id).innerHTML="<img src='img/dummy.png' class='img-fluid'>";
    }
    if(id==122||id==112||id==102){
        popped=c.pop();
        document.getElementById(id).innerHTML="<img src='img/dummy.png' class='img-fluid'>";
    }
    flag-=1;
}else{
    if(id==120||id==110||id==100){
        a.push(popped);
        document.getElementById(id).innerHTML="<img src='img/"+popped+".png' class='img-fluid'>";
        pushed=0;
    }
    if(id==121||id==111||id==101){
        b.push(popped);
        pushed=popped;
        document.getElementById(id).innerHTML="<img src='img/"+popped+".png' class='img-fluid'>";
    }
    if(id==122||id==112||id==102){
        c.push(popped);
        document.getElementById(id).innerHTML="<img src='img/"+popped+".png' class='img-fluid'>";
    }
flag=2;
}
}