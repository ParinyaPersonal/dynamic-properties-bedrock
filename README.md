# DynamicProperties Class for Minecraft Bedrock Edition
The DynamicProperties class is a TypeScript and JavaScript class that provides dynamic property management. It allows you to store and manage properties with keys and values of various types, such as strings, numbers, booleans, and objects. The class also provides methods for interacting with these properties.

* Updated: 2024-04-29
* Min Version: 1.20.80

## Installation
To use the DynamicProperties class, you need to have the Minecraft server API `@minecraft/server` installed in your project. If you haven't installed it yet, you can add it to your project using git:

```shell
gh repo clone MrMaxing/dynamic-properties-bedrock
```
## Methods
You can use the DynamicProperties class to create and manage dynamic properties with the following methods:

### Constructor
```js
constructor(dynamicName: string)
```
* Creates an instance of the DynamicProperties class with the given dynamic property name.
* The dynamic property name must be between 1 and 16 characters in length.
### `set` Method
```js
set(key: string, value: Value): this
```
* Sets a dynamic property with the specified key and value.
* The key is a string, and value can be of type string, number, boolean, or object.
* Returns the current instance of DynamicProperties.
### `delete` Method
```js
delete(key: string): boolean
```
* Deletes a dynamic property with the specified key.
* Returns true if the property was successfully deleted, or false if the property with the given key does not exist.
### `clear` Method
```ts
clear(): this
```
* Clears all dynamic properties, effectively resetting the instance to an empty state.
* Returns the current instance of DynamicProperties.
### `has` Method
```js
has(key: string): boolean
```
* Checks if a dynamic property with the specified key exists.
* Returns true if the property with the given key exists, or false if it does not.
### `get` Method
```js
get(key: string): Value
```
* Retrieves the value of a dynamic property with the specified key.
* Returns the value associated with the given key, or undefined if the key does not exist.
### `forEach` Method
```js
forEach(callbackfn: (value: Value, key: string, map: Map<string, Value>) => void, thisArg?: any): void
```
* Calls a provided function once for each dynamic property in the order of insertion.
* Optionally, you can specify a thisArg to be used as the this value when executing the callback function.
### `hex` Method
```js
hex(bytes: number): string
```
* Generates a random hexadecimal key of the specified length.
* Returns the random key of dynamic properties.
## Properties
You can use the DynamicProperties class to create and manage dynamic properties with the following properties:
### `array` Property
```js
array: [string, Value][]
```
* Returns an array containing all the key-value pairs (entries) of the dynamic properties.
### `keys` Property
```js
keys: IterableIterator<string>
```
* Returns an iterable containing all the keys of the dynamic properties.
### `values` Property
```js
values: IterableIterator<Value>
```
* Returns an iterable containing all the values of the dynamic properties.
### `entries` Property
```js
entries: IterableIterator<[string, Value]>
```
* Returns an iterable containing key-value pairs (entries) of the dynamic properties.
### `size` Property
```js
size: number
```
* Returns the number of dynamic properties in the instance.
## Example
```js
import * as mc from "@minecraft/server";

// Create a new instance of DynamicProperties
const db = new DynamicProperties("example");

// Set a dynamic property
db.set("key1", "value1");

// Check if a property exists
if (db.has("key1")) {
    console.log("Property 'key1' exists");
}

// Get the value of a property
const value = db.get("key1");
console.log(`Value of 'key1': ${value}`);

// Delete a property
db.delete("key1");

// Clear all properties
db.clear();
```
## License
This code is open-source and available under the Apache-2.0 license.

Feel free to use and modify it according to your needs. If you have any questions or encounter issues, please create an issue on the GitHub repository or contact the author for support.