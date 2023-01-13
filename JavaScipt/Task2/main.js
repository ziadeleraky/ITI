var sum = 0;
var num;

do {
  num = prompt("Enter a Number");
  sum += parseInt(num);
} while (parseInt(num) != 0 && sum <= 100);

if (!isNaN(sum)) {
  document.write("Sum = " + sum);
}
