#https://leetcode.com/problems/wiggle-sort/
class Solution(object):
    def wiggleSort(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        self.merge_sort(nums,0,len(nums)-1)
        #print(nums)
        mid = (len(nums)-1)/2
        left_list = [nums[i] for i in range(0,mid+1)]
        right_list = [nums[i] for i in range(mid+1,len(nums))]
        i = 0
        while i < len(nums):
            if len(left_list)>0:
                nums[i]= left_list.pop()
                i+=1
            if len(right_list)>0:
                nums[i]= right_list.pop()
                i+=1
        #print(nums)
            
    def merge(self,nums,p,q,r):
        left_list = [nums[i] for i in range(p,q+1)]
        right_list = [nums[i] for i in range(q+1,r+1)]
        inf = float("inf")
        left_list.append(inf)
        right_list.append(inf)
        left_index,right_index= 0,0
        for i in range(p,r+1):
            if left_list[left_index]<right_list[right_index]:
                nums[i]=left_list[left_index]
                left_index+=1
            else:
                nums[i]=right_list[right_index]
                right_index+=1
    def merge_sort(self,nums,p,q):
        if q>p:
            mid = (p+q)/2
            self.merge_sort(nums,p,mid)
            self.merge_sort(nums,mid+1,q)
            self.merge(nums,p,mid,q)
        
        