# Exercise 1: Create a dictionary with the following key-value pairs:
person ={
    "name": "John",
    "age": 25,
    'job': 'engineer'
}
# Exercise 2: Add a new key-value pair "city": "NewYork" to the dictionary.
person.update({"city": "NewYork"})
# Exercise 3: Update the 'age' value to 26.
person.update({'age': 26})
# Exercise 4: Remove the 'city' key-value pair from the dictionary.
person.pop('city')
print(person)
# Exercise 5: Print the value of the 'name' key in the dictionary.
print('name' in person)
# Exercise 6: Iterate over the dictionary and print each key-value pair.
for key, value in person.items():
    print(f"{key}: {value}")
# Exercise 7: Create a dictionary from two lists: keys = ['a', 'b', 'c'] and values = [1, 2, 3].
keys = ['a', 'b', 'c']
values = [1, 2, 3]
dictionary = dict(zip(keys, values))
print(dictionary)
# Exercise 8: Merge two dictionaries: dict1 = {'a': 1, 'b': 2} and dict2 = {'b': 3, 'c': 4}.
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}
merged_dict = dict1.copy()
merged_dict.update(dict2)
print(merged_dict)


    