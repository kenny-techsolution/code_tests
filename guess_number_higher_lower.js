//https://leetcode.com/problems/guess-number-higher-or-lower/
/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int max = n;
        int min = 0;
        int mid = 0;
        while (max != (min + 1)) {
            mid = min + (int) Math.floor((max - min) / 2);
            int answer = super.guess(mid);
            if (answer == 0) {
                break;
            } else if (answer == 1) {
                min = mid;
            } else if (answer == -1) {
                max = mid;
            }
        }
        return mid;
    }
}