const CHARS = new Map([
    ["А", "A"], ["а", "a"],
    ["Б", "B"], ["б", "b"],
    ["В", "V"], ["в", "v"],
    ["Г", "G"], ["г", "g"],
    ["Ґ", "G"], ["ґ", "g"],
    ["Д", "D"], ["д", "d"],
    ["Е", "E"], ["е", "e"],
    ["Є", "Ye"], ["є", "ie"],
    ["Ё", "E"], ["ё", "e"],
    ["Ж", "Zh"], ["ж", "zh"],
    ["И", "I"], ["и", "i"],
    ["І", "I"], ["і", "i"],
    ["Ї", "Yi"], ["ї", "i"],
    ["Й", "Y"], ["й", "i"],
    ["К", "K"], ["к", "k"],
    ["Л", "L"], ["л", "l"],
    ["М", "M"], ["м", "m"],
    ["Н", "N"], ["н", "n"],
    ["О", "O"], ["о", "o"],
    ["П", "P"], ["п", "p"],
    ["Р", "R"], ["р", "r"],
    ["С", "S"], ["с", "s"],
    ["Т", "T"], ["т", "t"],
    ["У", "U"], ["у", "u"],
    ["Ф", "F"], ["ф", "f"],
    ["Х", "Kh"], ["х", "kh"],
    ["Ц", "Ts"], ["ц", "ts"],
    ["Ч", "Ch"], ["ч", "ch"],
    ["Ш", "Sh"], ["ш", "sh"],
    ["Щ", "Shch"], ["щ", "shch"],
    ["Ъ", "Ie"], ["ъ", "ie"],
    ["Ы", "Y"], ["ы", "y"],
    ["Ь", ""], ["ь", ""],
    ["Э", "E"], ["э", "e"],
    ["Ю", "Yu"], ["ю", "iu"],
    ["Я", "Ya"], ["я", "ia"],
]);

/**
 * привет -> privet
 * @param {String} input
 * @param {String} space
 * @param {String} unknown
 * @returns {String}
 */
function transliterate(input, space = "-", unknown = "") {
    let s = "";

    for ( let c = 0; c < input.length; c++ ) {
        let char = input.charAt(c);
        let code = input.charCodeAt(c);

        if ( 48 <= code && code <= 57 || 65 <= code && code <= 90 || 97 <= code && code <= 122 ) {
            s += char;
        }
        else if ( CHARS.has(char) ) {
            s += CHARS.get(char);
        }
        else if ( code === 32 ) {
            s += space;
        }
        else {
            s += unknown;
        }
    }

    return s;
}

/**
 * привет, дядя -> privet-diadia
 * @param {String} input
 * @returns {String}
 */
function name(input) {
    return transliterate(input, '-', '-')
        .replace(/\-+/g, '-')
        .replace(/^\-+/, '')
        .replace(/\-+$/, '')
        .toLowerCase();
}

module.exports.transliterate = transliterate;
module.exports.name = name;