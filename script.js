alert("Dobro posjalovat v igru")

 let min = 1
 let max = 10
 
 function getRandomInRange(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 let num = getRandomInRange(min, max)

 while (1) {
     if (prompt('type nubmer') == num) {
        alert("true")
        break
    } else {
        alert("false")
    }
}