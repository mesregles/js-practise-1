/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */

function multiple(a, b) {
var c=0;
if(b<0);
{
    b=Math.abs(b)
    a=-a
}
for(let i=0;i<b;i++)
{
    c+=a;
}
return c;

}
console.log(multiple(2,4));
console.log(multiple(2,-4));

