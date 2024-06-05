function hasProperty(propertyName, obj) {
    return obj.hasOwnProperty(propertyName);
}

// Пример использования:
const exampleObject = {
    a: 1,
    b: 2
};
console.log(hasProperty('a', exampleObject)); // true
console.log(hasProperty('c', exampleObject)); // false
