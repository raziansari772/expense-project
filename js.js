const title = document.querySelector("#title");
const amount = document.querySelector("#amount");
const btn = document.querySelector("#btn");
const total = document.querySelector("#total");
const list = document.querySelector("#list");
const reset = document.querySelector("#reset");

let allexpense = [];
let totalexpense = 0;

btn.addEventListener("click", function(){
     
   const  titleexpense = title.value;
   const amountexpense = amount.value;


   //console.log(titleexpense);
   //console.log(amountexpense);

   if(titleexpense === "" ||amountexpense === ""){
      alert("!!ADD YOUR TASK !!");
      return;
   }

   const food = {
      title : titleexpense,
      amount : Number(amountexpense)
   }
   allexpense.push(food);

  // console.log(allexpense);

  totalexpense = totalexpense + food.amount;
  total.textContent = totalexpense;

  title.value = "";
   amount.value = "";

   render();

  function render(){

   list.innerHTML = "";

   allexpense.forEach(function(item, index){

      //console.log(item);

      const li = document.createElement("li");
      li.textContent = 
      item.title + " - RS = " + item.amount;

     const delbtn = document.createElement("button");
     delbtn.textContent = "DELETE";

     delbtn.addEventListener("click", function(){

      totalexpense -= item.amount; 

      allexpense.splice(index, 1)

      total.textContent = totalexpense;
     
    render();

     })
     reset.addEventListener("click", function(){

      allexpense = [];
      totalexpense = 0;

      total.textContent = "0";

      render();

     })
     list.appendChild(li);
     li.appendChild(delbtn);
   });

  };

});