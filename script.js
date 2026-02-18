//q1
function question1() {
   let textarea = document.getElementById('userText').value.toUpperCase();
 
   document.getElementById('display').innerHTML = textarea ;
}
//q2
function question2() {
   let textsarea = document.getElementById('userText').value.toLowerCase();
 
   document.getElementById('display').innerHTML = textsarea ;
}
//q3
function question3() {
    let capsWord = document.getElementById('userText').value.split(' ');
    let uppercaseWords = capsWord.map( (word) => word.charAt(0).toUpperCase() + word.slice(1) );
    document.getElementById('display').innerHTML = uppercaseWords.join(' ');
}
//q4
function question4() {
    let noSpace = document.getElementById('userText').value.trim();
 
    document.getElementById('display').innerHTML = noSpace;
}
//5
function question5() {
    let replaceArea = document.getElementById('userText').value.trim();
    let word1 = prompt("Enter the word to replace")
    let word2 = prompt("Enter a new word")
    replaceArea = replaceArea.replace(word1, word2)
    document.getElementById('display').innerHTML = replaceArea;
}
//6
function question6() {

  let textLength = document.getElementById('userText').value.length;
  
  document.getElementById('display').innerHTML = textLength;
}