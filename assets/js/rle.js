/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * @param  {string} input
 * @return {string}
 */
function rle(input) {
    let result = '';

	let currentChar = '';
	let groupLength = 0;

	for (let i = 0; i < input.length; i++) {

		if (groupLength === 0) {
			currentChar = input[i];
			groupLength = 1;
			continue;
		};

		if (currentChar === input[i]) {
			groupLength++;
			continue;
		};

		result += currentChar;

		currentChar = input[i];

		if (groupLength > 1) {
			result += groupLength;
		};

		groupLength = 1;

	};

	result += currentChar;

	if (groupLength > 1) {
		result += groupLength;
	};

	return result;

};

