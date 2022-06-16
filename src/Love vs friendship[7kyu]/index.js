/*If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
*/

function wordsToMarks(string){
    const letras = "abcdefghijklmnopqrstuvwxyz";
    let result = 0;
    
    for (let i = 0; i < string.length; i += 1) {
      result += (letras.indexOf(string[i]) + 1);
    }
    
    return result;
  }