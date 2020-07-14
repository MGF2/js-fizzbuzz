//Numeri da 1 a 100
for (i = 1; i <= 100; i++) {
  //Multipli di 3 AND 5
  if ((i % 3 == 0) && (i % 5 == 0)){
   console.log("FizzBuzz");
   //Multipli di 5
  }else if (i % 5 == 0) {
   console.log("Buzz");
   //Multipli di 3
  }else if (i % 3 == 0) {
    console.log("Fizz");
   //Numeri esclusi dalle condizioni precedenti
  }else {
    console.log(i);
  }

}
