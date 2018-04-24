 window.onload = function(){
   var name = document.getElementById("name");
   var form = document.getElementById("myForm");
   var species = document.getElementById("species");
   var numOfLegs = document.getElementsByClassName("numberOfLegs");
   var specialAbilities = document.getElementsByClassName("specialAbilities");
   var email = document.getElementById("petEmail");
   var password = document.getElementById("petPassword");
   var description = document.getElementById("description");
   var result = document.getElementById("result");
   var obj = {};

   var button = document.getElementById("button");

   form.addEventListener("submit", function(event) {
      event.preventDefault();
      obj.name = name.value;
      obj.species = species.value;
      obj.email = email.value;
      obj.password = password.value;
      obj.description = description.value;
      console.log(obj);

      for (let i = 0; i < numOfLegs.length; i++){
        if (numOfLegs[i].checked === true){
          obj.numOfLegs = numOfLegs[i].value;
        }
      }

      for (let i = 0; i < specialAbilities.length; i++){
        if (specialAbilities[i].checked === true){
          obj.specialAbilities = specialAbilities[i].value;
        }
      }
      
      

   });
};

// var obj = {};

// console.log('obj', obj);
// obj.petName = "ShockWave";

// console.log