document.getElementById("validate").onclick=function(){
    return f1();
}

function f1()
{
    var Fn=document.getElementById("1").value;
    var ln=document.getElementById("2").value;
  //  var em=document.getElementsById("3").value;
    var ph=document.getElementById("4").value;
    var p=document.getElementById("5").value;
    var valid=true;
    if(Fn.length<7 || Fn.length>10&&ln.length<7 || ln.length>25&&ph.length<10&&p.length<7||p.length>14)
    {
        valid=false;
    }
    
  return valid;
}