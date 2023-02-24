var player1=localStorage.getItem("player1");
var player2=localStorage.getItem("player2");
var playerpoints1=0;
var playerpoints2=0;
document.getElementById("player1Name").innerHTML=player1+" : ";
document.getElementById("player2Name").innerHTML=player2+" : ";
document.getElementById("player1Score").innerHTML=playerpoints1;
document.getElementById("player2Score").innerHTML=playerpoints2;
document.getElementById("playerQuestion").innerHTML=" Turno De Pergunta - "+player1;
document.getElementById("playerAnswer").innerHTML=" Turno De Resposta - "+player2;
var getWord = "";
var getWord2 = "";
function send(){
     getWord = document.getElementById("word").value;
   getWord2 = document.getElementById("word2").value;
    questionWord = "<h4 id='wordDisplay'> P. "+getWord+"X"+getWord2+"</h4>";
    input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = questionWord + input_box + checkButton ; document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("word2").value = "";
}
tq="player1";
ta="player2";
function check(){
    getAnswer = document.getElementById("inputCheckBox").value;
    var resultado = getWord*getWord2;
    if (getAnswer == resultado){
      if(ta == "player1"){
        playerpoints1 = playerpoints1+1;
        document.getElementById("player1Score").innerHTML= playerpoints1;
      }  
      else{
        playerpoints2 = playerpoints2+1
        document.getElementById("player2Score").innerHTML= playerpoints2;
      }
    }
    if (ta == "player1"){
      ta="player2";
      document.getElementById("playerAnswer").innerHTML=" Turno De Resposta - "+player2; 
    }
    else{
        ta="player1";
        document.getElementById("playerAnswer").innerHTML=" Turno De Resposta - "+player1; 
    }
    if (tq == "player1"){
        tq="player2";
        document.getElementById("playerQuestion").innerHTML=" Turno De Pergunta - "+player2; 
      }
      else{
          tq="player1";
          document.getElementById("playerQuestion").innerHTML=" Turno De Pergunta - "+player1; 
      }
      document.getElementById("output").innerHTML="";
    
}

