#import math
from math import floor, ceil
name = 'Joe Biden "Kamala" '
print(name)
name2 = 'Kamala Harris \' \\ \n A new line'
print(name2)

autoConcatenate = 'one ' 'two'  'three' 'four'
print(autoConcatenate)

print('before')
print(''' 
this is line one
This is line two
This is line three 
''')
print('after')

print(name.upper())
print(name.lower())
print('here is some text'.title())

print("name is: ", name)

print(name.replace('Joe', 'Kamala'))

name = name.replace('Joe', 'Kamala')

first = 'Joe'
last = 'biden'
print(f'First:  {first} Last: {last}')
print("First: {} Last: {}".format(first, last))

students = ['Joe', 'Kamala', 'Jan', 'Sam', 'Bob', 'Tim']
print(students)

print(len(students))  # length of array, can print length of anything
print(len(name))

print(students[0])
print(students[-1])  # last one in array

# get 5th character in string
print(name[5])

# string slice
print(name[2:])
print(name[2:10])
print(name[:10])
print(name[2:15:2])
print(name[::2])

print(name[::-1])  # reverse string

# slice a list
print(students[2:5:2])

students.reverse()
print(students)


students.append('George')
print(students)

print('Hello ' * 2)
print(students * 2)

people = ['Joe']
# people[2] = 'Kamala'   this can not be done have to use append
people.append('Kamala')

people.append(['Sam', 'Bob'])
print(people)

# correct way to add multiple strings to a list
people.extend(['George', 'Tim'])
print(people)


people.pop()  # takes last guy off
print(people)

people.insert(2, 'New #2')
print(people)

people.remove('New #2')
print(people)

ref = people  # ref changes when people changes
people.append('New one')
print(ref)

# this is copied and doesnt get changed if people gets changed
copy = people[:]
people.append('Another new one')
print(copy)
print(people)

some_more_people = ['Donald', 'Mike']
people.append(some_more_people)
print(people)

copy2 = people.copy()

people.append('Yet another new one')
some_more_people.append('This will be in copy2')
print(copy2)

copy2.clear()  # clear the array
print(copy2)

people = ['Sam', None, None]
people[2] = 'Joe'
print(people)

people = [None] * 100
print(people)

#search in string or list
print(name.find('Biden'))
print(name.find('Kamala'))
print(name.find('biden'))  # if not in it you get a -1
print(name.index('Biden'))
# print(name.index('biden'))  #get error

# in a list cant use find have to use index

people.append('Joe')
person_to_look_for = 'Joe'

try:
    print(people.index(person_to_look_for))  # need indentation in a try
except ValueError as e:
    print(f'OOPS not in list - {e} ')
except:
    print('Some other error')
else:
    print(f'Yay! we found {person_to_look_for}!')
finally:
    print('All done')
print('Also all done')

if person_to_look_for in people:
    print(f'found person at {people.index(person_to_look_for)}')
    print('We see this only if found')
else:
    print(f'{person_to_look_for} is not in list')
print('we always see this')

x = 5
if x < 10:
    print('x is < 10')
elif x < 20:
    print('x is < 20')
else:
    print('x >= 20')

if 'j' in name and 'b' in name:
    print('There is a j!')
else:
    print('no j')

x = 10 / 3
print(x)
x = 10 // 3  # no remainder
print(x)


print(abs(-100))  # absolute value
print(ceil(3.33))  # ceiling = round up, floor = round down
print(floor(3.33))


name = input('What is your name? ')
print(f'Hello {name}')

age = 0
while age == 0:
    try:
        age = int(input('What is your age? '))
    except ValueError as e:
        print('Please enter a valid age!')


print(f'You will be 100 in  {100 - age} years ')

# z = x > 5 ? x: 5
message = 'You can buy alcohol' if age > 21 else 'You can not buy alcohol'
print(message)

name = 'Joe Biden'
for foo in name:
    print(foo)

i = 0
for val in people:
    # print(val)
    print(f'{i} - {val}')
    i += 1

for i in range(len(name)):
    print(f'{i} - {name[i]}')

for i in range(len(people)):
    print(f'{i} - {people[i]}')

for i in range(10, 20, 2):
    print(i)

for person in people:
    if person == 'Sam':
        print('Found Sam')
        break
else:
    print('We did not find Sam (break)')

for index, value in enumerate(people):
    print(f'{index} - {value}')

people = ['Joe', 'Kamala', 'Jan']
scores = [25, 50, 75]
for name, score in zip(people, scores):
    print(name, score)


myTuple = (1, 2, 3, 4, 5)  # a tuple is read only
for x in myTuple:
    print(x)

anotherTuple = 6, 7, 8
for x in anotherTuple:
    print(x)


empty_tuple = ()  # need parenthesis

tuple_of_one = (1,)
for x in tuple_of_one:
    print(x)


#a = myTuple[0]
#b = myTuple[1]
#c = myTuple[2]
#d = myTuple[3]
#f = myTuple[4]

a, b, c, d, f = myTuple
print(a, b, c, d, f)

# a,b,c = myTuple #makes an error
# print(a,b,c)

a, b, c, *the_rest = myTuple
print(a, b, c, the_rest)

a, b, *the_middle_ones, the_last = myTuple
print(a, b, the_middle_ones, the_last)
