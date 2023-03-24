var maindiv=document.getElementById("div1");
var inputdiv=document.getElementById("input1");
var arr=[];
inputdiv.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        if(inputdiv.value==''){
            window.alert("Please Enter your text");
        }
        else{
            addTolist();
            inputdiv.value='';
        }
    }
});
function addTolist(){
   // var arr=[];
    let taskdiv=document.createElement("div");
    let spantask=document.createElement("span");
    spantask.innerHTML=inputdiv.value;
    let check=document.createElement("input");
    check.setAttribute("type","checkbox");
    check.setAttribute("title","checktocomplete");
    check.addEventListener("click",(e)=>{
          if(check.checked===true){
            spantask.style.textDecoration="line-through";
          }
          else{
            spantask.style.textDecoration="none";
          }
    });
    var btn=document.createElement("input");
    arr.push(inputdiv.value);
    console.log(arr);
    btn.setAttribute("type","button");
    btn.setAttribute("title","delete");
    btn.value="X";
    btn.addEventListener("click",()=>{



    
          taskdiv.remove();
          arr.pop();
          console.log(arr);
    });
    taskdiv.appendChild(spantask);
    taskdiv.appendChild(check);
    taskdiv.appendChild(btn);
    maindiv.appendChild(taskdiv);
    

}
