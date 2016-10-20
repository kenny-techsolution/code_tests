from sets import Set
# https://leetcode.com/problems/subsets/


class Solution(object):

    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        self.res = list([])
        n = len(nums)
        set = Set([])
        for i in range(n):
            self.find_subset(nums, 0, Set([]), i)

        self.res.append([])
        self.res.append(nums)

        return self.res

    def find_subset(self, nums, index, set, length):
        #include and not include
        c_set = Set(set)
        if index < len(nums):
            val = nums[index]

            ##not include
            #print("not include",c_set,"index",index,"val", val,"lenght",length)
            index += 1
            self.find_subset(nums, index, c_set, length)

            # include
            length = length - 1
            c_set.add(val)
            #print("include",c_set,"index",index,"val", val,"lenght",length)

            # set found
            if length == 0:
                # print("output")
                self.res.append(list(c_set))
                return
            else:
                self.find_subset(nums, index, c_set, length)
