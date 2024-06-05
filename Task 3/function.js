function createObjectWithoutPrototype() {
    return Object.create(null);
}

// Пример использования:
const objWithoutPrototype = createObjectWithoutPrototype();
console.log(objWithoutPrototype); // {}
console.log(Object.getPrototypeOf(objWithoutPrototype)); // null
