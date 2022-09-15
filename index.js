const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let character = []
let button = document.getElementById("btn")
let inputs = document.getElementById("input1")

button.addEventListener("click", function(){
   let randomCharacter = Math.floor(Math.random() * characters.length)
   console.log(randomCharacter)
   for(let i = 0; i < characters.length; i ++) {
       inputs.value += characters[i] 
       
   }
})



