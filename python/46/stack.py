# False = 0, '', [] , {} , (), False, None
# True = anything else


#last in first out
class Stack:
    def __init__(self):
      self._values = []

    def push(self, val):
        self._values.append(val)  # adding things to end of stack of a list

    def pop(self):
        return self._values.pop()

    def peek(self):
      return self._values[-1] if self._values else None

        #if (self._values):
         # return self._values[-1]
       # else:
         # return None


stack = Stack()
for i in range(10):
    stack.push(i)

while stack.peek() != None:
    print(stack.pop())
