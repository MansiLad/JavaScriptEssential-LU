//Assignment 1
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);
// output is Undefined
// Because, after making clothes.length=0 we make the size of the list as zero
// Therefore, no elements in the list, and clothes[0] results undefined

//Assignment 2
var array = [1,2,3,4,5,6,7,8,9];
var i;
var sum = 0 ;
for(i=0;i<array.length;i++)
{
    sum = sum + array[i];
}
console.log(sum);