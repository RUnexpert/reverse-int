module.exports = function reverse (n) {
    n = Math.abs(n);
    let result = String(n).split("").reverse().join("");
 
    return result;
  
}
