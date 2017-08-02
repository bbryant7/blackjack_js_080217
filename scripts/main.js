/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/



function handValue (hand) {
let newHand = [];
 for (let i = 0; i < hand.length; i++) {

   if (hand[i]=== 'J'|| hand[i]=== 'Q' || hand[i]=== 'K'){
     newHand.push(10);
   }

   else if (hand[i]==='A'){
     
   }
   else {
    newHand.push(parseInt(hand[i],10));
  }

 }

 let total= 0;
 for (let i = 0; i < newHand.length; i++) {
   total += newHand[i];
 }
return total;

}

// sum += parseInt(hand[i],10);

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
