# https://leetcode.com/problems/word-ladder/
import string
from sets import Set


class Solution(object):

    def ladderLength(self, beginWord, endWord, wordList):
        """
:type beginWord: str
:type endWord: str
:type wordList: Set[str]
:rtype: int
"""
        wordList.add(endWord)
        level = 1
        node = (beginWord, 1)
        queue = []
        queue.append(node)
        while len(queue) > 0:
            curren_word = queue.pop(0)
        #print("keyword:" + curren_word[0])
            if curren_word[0] == endWord:
                return curren_word[1]
            next_list = self.nextWords(curren_word[0], wordList)
            #print("next list:")
            # print(next_list)
            level = curren_word[1] + 1
            for word in next_list:
                node = (word, level)
                queue.append(node)
            # print("queue")
            # print(queue)
        return 0

    def nextWords(self, word, wordList):
        letter_list = string.ascii_lowercase
        res = []
        for index in range(len(word)):
            for l in letter_list:
                if word[index] != l:
                    altered_word = word[:index] + l + word[index + 1:]
                    if altered_word in wordList:
                        wordList.remove(altered_word)
                        res.append(altered_word)
        return res
