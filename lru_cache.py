# https://leetcode.com/problems/lru-cache/
class LRUCache(object):

    def __init__(self, capacity):
        """
        :type capacity: int
        """
        self.capacity = capacity
        self.dic = {}
        self.q = []

    def get(self, key):
        """
        :rtype: int
        """
        if key in self.dic:
            self.updateQ(key)
            return self.dic[key]
        else:
            return -1

    def set(self, key, value):
        """
        :type key: int
        :type value: int
        :rtype: nothing
        """
        if key not in self.dic:
            if len(self.dic) >= self.capacity:
                removed_key = self.q.pop(0)
                self.dic.pop(removed_key, None)
            self.q.append(key)
        else:
            self.updateQ(key)
        self.dic[key] = value

    def updateQ(self, key):
        self.q.remove(key)
        self.q.append(key)
