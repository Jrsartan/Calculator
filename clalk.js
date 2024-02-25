  let allBtn=document.querySelectorAll(".btn");
  let imp=document.querySelector("input");

  allBtn.forEach(ev=>{
     ev.addEventListener("click",(ev)=>{
        // console.log(ev.target.innerText);
        imp.value+=ev.target.innerText;
     });
  });
   let equal=document.querySelector(".equal8tn");
   equal.addEventListener("click",()=>{
      imp.value=eval(imp.value);
   });
   let ac=document.querySelector("#AC");
   ac.addEventListener("click",()=>{
       imp.value="";
   });
   let del=document.querySelector("#DEL");
   del.addEventListener("click",()=>{
       imp.value=imp.value.slice(0,-1);
   })
   