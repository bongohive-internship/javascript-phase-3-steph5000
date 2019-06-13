// solutions to the exercises mentioned in the readme should be in this file.
function largernum(a, b) {
  return Math.max(a, b) }
// second solution
var number;
for (number=0; number<15; number++) {
  if (number % 2 == 0) { console.log(number + "" + "is even"); }
  else { console.log(number + "" + "is old"); }
  //third  solution
  var number;
  var total = 0; }
  for (number=1; number<1000; number++) { if ((number % 3 === 0) || (number % 5 === 0)) {
    total = total + number; }
                                        }
 // forth solution
  function assigngrade(score) {
    var grade;
    if (score >= 9) { grade = "A"; }
    else if (score>= 80) { grade = "B"; }
    else if ( score>=70) { grade = "C"; }
    else if (score>=60) { grade ="D"; }
    else if (score>=59) { grade= "E"; }
    else { grade = "F"; }
    return grade; }
  
  
    
