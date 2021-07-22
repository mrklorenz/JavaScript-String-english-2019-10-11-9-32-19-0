// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log(name);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var array = sentence.split(" ");
for (let i = 0; i < newarray.length; i++) {
  array[i] = array[i].charAt(0).toUpperCase() + array[i].substr(1);
}
console.log(array.join(" "));

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money = money.substr(1,2);
console.log(money);
