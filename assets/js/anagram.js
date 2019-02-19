/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('Statue of Liberty', 'Built to stay free') === true
 * anagram('просветитель', 'терпеливость') === true
 * anagram('апельсин', 'Апельсин') === false
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */
function anagram(first, second) {
    var sort = function(str) {
        return str.replace(/\s+/g, '').split('').sort().join('').toLowerCase();
      }
      
    
        return first.trim() === second.trim() ? false : sort(first) === sort(second) ;
      
      
}
console.log(anagram('Statue of Liberty', 'Built to stay free'))