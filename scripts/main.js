/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/



function handValue (hand) {
  let total= 0;
  let ace = [];

  for (let i = 0; i < hand.length; i++) {
   if (hand[i]==='A'){
     ace.push(hand[i]);
     continue;
   }

   if (hand[i]=== 'J'|| hand[i]=== 'Q' || hand[i]=== 'K'){
     total += 10;
     continue;
   }
  total += parseInt(hand[i]);
 }

 for (var i = 0; i < ace.length; i++) {
   if (total >= 11){
     total += 1;
   }
   else {
     total += 11;
   }
 }
return total;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
