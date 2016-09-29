import string
class Solution(object):
    def getNextWord(self, word, dict):
		aToz = string.ascii_lowercase
		res = []
		for char in aToz:
			print(char)
			for j in range(len(word)):
				if word[j] == char:
					print("bingo:"+ str(j) + " "+ word[j])
					continue
				newWord = word[:j] + char + word[j+1:]
				print("new word:" + newWord)
				if newWord in dict:
					res.append(newWord)
		return res
	def nextWords(self, word, wordList):
		letter_list = string.ascii_lowercase
		res = []
		for index in range(len(word)):
			for l in letter_list:
				if word[index]!=l:
					altered_word = word[:index]+l+word[index+1:]
					if altered_word in wordList:
						res.append(altered_word)
		return res