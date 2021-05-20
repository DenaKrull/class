class Stack:
    def __init__(self):
      self._values = []

    def push(self, val):
        self._values.append(val)  # adding things to end of stack of a list

    def pop(self):
        return self._values.pop()

    def peek(self):
        if len(self._values) > 0:
          return self._values[-1]
        else:
          return None