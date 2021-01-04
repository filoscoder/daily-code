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
const RomanNumerals = {
    fromRoman: (rom) => {
        if (typeof rom !== 'string') return;

        switch (rom.toUpperCase()) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
        }
    },

    toRoman: (num) => {
        if (typeof num !== 'number') return;
        const numStrRev = num.toString().split('').reverse();

        const getSymbols = (idx) => {

            switch (idx) {
                case 0: return { unit: 'I', half: 'V', nextUnit: 'X' };
                case 1: return { unit: 'X', half: 'L', nextUnit: 'C' };
                case 2: return { unit: 'C', half: 'D', nextUnit: 'M' };

                default: return { unit: 'M', half: '', nextUnit: '' };
            }
        }

        return numStrRev.map((curr, idx) => {
            const { unit, half, nextUnit } = getSymbols(idx);

            switch (curr) {
                case '1': return `${unit}`;
                case '2': return unit.repeat(2);
                case '3': return unit.repeat(3);
                case '4': return `${unit}${half}`;
                case '5': return `${half}`;
                case '6': return `${half}${unit}`
                case '7': return `${half}${unit.repeat(2)}`
                case '8': return `${half}${unit.repeat(3)}`;
                case '9': return `${unit}${nextUnit}`;
                default:
                    return '';
            }

        }).reverse().join('');
    }

}