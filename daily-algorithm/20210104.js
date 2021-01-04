/*
# TASK
Create a RomanNumerals class that can convert a roman numeral to 
and from an integer value. It should follow the API demonstrated 
in the examples below.
Multiple roman numeral values will be tested for each helper method.
Modern Roman numerals are written by expressing each digit separately 
starting with the left most digit and skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; 
resulting in MCMXC. 
2008 is written as 2000=MM, 8=VIII; or MMVIII. 
1666 uses each Roman symbol in descending order: MDCLXV

## Examples
```
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
```

##  Help
| Symbol | Value |
|----------------|
| I      |  1    |
| V      |  5    |
| X      |  10   |
| L      |  50   |
| C      |  100  |
| D      |  500  |
| M      |  1000 |

*/


// TODO: create a RomanNumerals helper object
const dictionary = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}
const analysis = {
    0: [],
    1: [1],
    2: [1, 1],
    3: [1, 1, 1],
    4: [1, 5],
    5: [5],
    6: [5, 1],
    7: [5, 1, 1],
    8: [5, 1, 1, 1],
    9: [1, 10],
}
class RomanNumerals {
    static fromRoman(str) {
        return str.split('').map(c => dictionary[c]).reduce((sum, val, index, arr) => sum += val >= ~~arr[index + 1] ? val : -val, 0);
    }
    static toRoman(number) {
        return String(number).split('').reduce((sum, i, c, arr) => [...sum, ...analysis[i].map(n => n * Math.pow(10, arr.length - 1 - c))], []).map(i => dictionary[i]).join('');
    }
}