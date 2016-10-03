# https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
class Solution(object):

    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        if len(prices) == 0:
            return 0
        last_price = 0
        valley_price = 0
        profit = 0
        move_up = None
        for i in range(1, len(prices)):
            current_price = prices[i]
            last_price = prices[i - 1]
            if current_price > last_price:
                if move_up == None or move_up == False:
                    # valley found
                    #print("valley found")
                    # print(last_price)
                    valley_price = last_price
                move_up = True
            elif current_price < last_price:
                if move_up == True:
                    # peak found
                    if valley_price != None:
                        #print("peak found")
                        # print(last_price)
                        profit += last_price - valley_price
                        valley_price = None
                move_up = False
            else:
                move_up = move_up
                # handle the last price if it is the same as the last price.
            if i == (len(prices) - 1) and move_up == True and valley_price != None:
                # print("final")
                # print(current_price)
                profit += current_price - valley_price
        return profit
