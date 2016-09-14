//https://leetcode.com/problems/count-primes/
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var isPrimeArray = [];
    //create the boolean array
    //prime needs to be greater than one.
    var numPrime = 0;
    for (i = 0; i < n + 1; i++) {
        isPrimeArray.push(true);
    }
    isPrimeArray[0] = false;
    isPrimeArray[1] = false;
    for (i = 2; i < n; i++) {
        //find out all multiple of the i, Sieve theory said you can start from i*i.
        if (isPrimeArray[i] === true) {
            for (j = i * i; j < n; j += i) {
                isPrimeArray[j] = false;
            }
        }
        if (i > Math.sqrt(n)) {
            break;
        }
    }
    for (i = 2; i < n; i++) {
        if (isPrimeArray[i] === true) {
            numPrime++;
        }
    }
    console.log(isPrimeArray.length);
    return numPrime;
};