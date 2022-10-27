let button = document.getElementById("button");
let input = document.getElementById("input");
let answer = document.getElementById("answer");
let eight = document.getElementById("eight");
let options = ["It is certain","It is decidedly so","Without a doubt","Yes – definitely",
"You may rely on it","As I see it, yes","Most likely","Outlook good","Yes","Signs point to yes",
"Don’t count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful",
"Reply hazy, try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again"];




button.addEventListener("click", function() {
    if (input.value.length < 1) {
        alert("Please enter a question!");
         } 
        
         else {
            eight.innerHTML = '';
            answer.innerHTML = 'Searching the Cosmos, stand by!'
            setTimeout(hold,  3000);
            
          }

                 
        function hold(){
        eight.innerHTML = '';         
        let num = Math.floor(Math.random()* options.length);       
        answer.innerHTML = options[num];       
        setTimeout(timeUp, 3000);
        }
         
         function timeUp(){
          document.getElementById("input").value='';
          document.getElementById("eight").innerHTML='8';
          document.getElementById("answer").innerHTML='';
            }
              
         }
        
      );
    
    

    // let num = Math.floor(Math.random()* options.length);
    // options.classList.add(options[Num]);