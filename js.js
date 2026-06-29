//------------LOCAL STORAGE DATA----------;

let  allexpense = JSON.parse(localStorage.getItem("expenses")) || [];

 //--------DOM QUERYSELECTOR---------

const title = document.querySelector("#title");
const amount = document.querySelector("#amount");
const btn = document.querySelector("#btn");
const total = document.querySelector("#total");
const list = document.querySelector("#list");
const reset = document.querySelector("#reset");

//--------LOCAL STORAGE AND SAVE TOTAL---------

let  totalexpense = JSON.parse(localStorage.getItem("Expenses")) || 0;
total.textContent = totalexpense;

//-------------ADD EXPENSE----------

btn.addEventListener("click", function(){
     
   const  titleexpense = title.value.toUpperCase();
   const amountexpense = amount.value;


   if(titleexpense === "" ||amountexpense === ""){
      alert("!!ADD YOUR TASK !!");
      return;
   }

   const food = {
      title : titleexpense,
      amount : Number(amountexpense)
   }
   allexpense.push(food);

   localStorage.setItem("expenses", JSON.stringify(allexpense));


  totalexpense = totalexpense + food.amount;
  total.textContent = totalexpense;

  localStorage.setItem("Expenses", JSON.stringify(totalexpense));

  title.value = "";
   amount.value = "";

   render();

});

 //----------RENDER EXPENSE LIST---------

  function render(){

   list.innerHTML = "";

   allexpense.forEach(function(item, index){


      const li = document.createElement("li");
      li.textContent = 
      item.title + " - RS = " + item.amount;

     const delbtn = document.createElement("button");
     delbtn.textContent = "DELETE";

     delbtn.addEventListener("click", function(){

      totalexpense -= item.amount; 

      localStorage.setItem("Expenses", JSON.stringify(totalexpense))

      allexpense.splice(index, 1)

      localStorage.setItem("expenses", JSON.stringify(allexpense));

      total.textContent = totalexpense;
     
    render();

     })

     list.appendChild(li);
     li.appendChild(delbtn);

   })

  };

//----------RESET ALL EXPENSE-----------

 reset.addEventListener("click", function(){

      allexpense = [];
      totalexpense = 0;

      total.textContent = "0";

      localStorage.setItem("expenses", JSON.stringify(allexpense));
      localStorage.setItem("Expenses", JSON.stringify(0));

      render();

     })

     //-----------ENTER KEY SUPPORT---------

title.addEventListener("keypress", function(e){
   if(e.key === "Enter"){
      btn.click();
   }
});
amount.addEventListener("keypress", function(e){
   if(e.key === "Enter"){
      btn.click();
   };
});

render();


