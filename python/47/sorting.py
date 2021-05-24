from random import randint
#import Account
from account import Account

numbers = []
for i in range(10):
    numbers.append(randint(1, 100))

print(numbers)

# print(sorted(numbers))

#numbers = sorted(numbers)

numbers.sort()

print(numbers)

print(sorted((3, 2, 1)))

numbers.clear()

for i in range(10):
    numbers.append(randint(1, 100))

print(sorted('Joe Biden'))
print(sorted('Joe Biden', key=str.lower))

a1 = Account('joe', 2000)
print(a1)

a2 = Account('kamala', 1000)
print(a2)

accounts = [a1, a2]
print(accounts)
# print(sorted(accounts) #this is an error
print(sorted(accounts, key= lambda account: account._account_holder))
print(sorted(accounts, key= lambda account: account._get_balance()))
