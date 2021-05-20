potus = {               # dictionary
  'first' : 'Joe',
  'last' : 'Biden'

}

print(f"{potus['first']} {potus['last']}") # if try to get something that doesnt exist it fails
brains = potus.get('brains', 'very little')  # second parameter is default
print(brains)

if 'first' in potus:
  print(potus['first'])
else:
  print('No first')

potus['brains'] = 'some'
brains = potus.get('brains', 'very little')
print(brains)

del potus['brains']
brains = potus.get('brains', 'very little')  # second parameter is default
print(brains)

good_presidents = set(['trump', 'reagan', 'washington', 'washington']) # set will only print unique values
presidents = set(['biden','obama','carter', 'reagan'])

print(good_presidents)

print(good_presidents.union(presidents))  #union puts 2 together
print(good_presidents.intersection(presidents))  #intersection prints only ones who are in both
print(good_presidents.difference(presidents)) 
print(presidents.difference(good_presidents)) # only gives you ones that are not in the other one

presidents.add('nixon')

for president in presidents:
  if president in good_presidents:
    print(f'{president} was a good president')
  else:
    print(f'{president} was not a good president')

for president in presidents:
  if president not in good_presidents:
    print(f'{president} was a good president')
  else:
    print(f'{president} was not a good president')


cant_change = frozenset(['ice cream', 'sherbert', 'ices'])  #can't add into frozen set
#cant_change.add('ice')  cant do this