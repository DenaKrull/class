import random


def increment(number, by=1):  # can put in default parameter
    print(f'inside increment {number} {by}')
    return number + by


print(increment(5, 2))
print(increment(5))
# print(increment('hello'))
print(increment('hello', 'goodbye'))

# if give name of parameter ur passing it in then it can be in any order
print(increment(by=5, number=2))

print(f'{5} {6}', 'foo', sep=', ', end='-')
print('bar')


def add(numbers):
    total = 0
    for number in numbers:
        total += number
    return total


print(add([1, 2, 3]))  # as a list
print(add((1, 2, 3)))  # as a tupple


def add2(*numbers):  # dont have to manually create list or tupple
    total = 0
    for number in numbers:
        total += number
    return total


print(add2(1, 2, 3))


def add_user(**user):   # turn named parameters into a dictionary
    print(user)
    print(user.get('name', 'no name'))


# add_user('Joe')
add_user(name='Joe', email='', foo='bar')
add_user(bar='foo')


def choice(seq):
    spot = random.randint(0, len(seq) - 1)
    return seq[spot]


print(choice('Joe'))  # every time call gives you a random spot

for x in range(0, 20):
    # print(choice([1, 2, 3, 4, 5]))  #get a random choice each time, runs 20 times
    print(choice(['apple', 'banana', 'pear', 100, 37]))

print('done')

print(random.choice(['apple', 'banana', 'pear', 100, 37]))


x = 5
print(x)


def use_x():
    global x
    x = 15
    print(x)


use_x()
print(x)


if True:
    z = 6  # even though out of scope were still able to print later

if False:
    y = 7
#else:
    #y = None

print(z)
#print(y)
