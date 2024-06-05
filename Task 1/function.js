function logOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

// Пример использования:
const exampleObject = {
    a: 1,
    b: 2
};
exampleObject.c = 3;
logOwnProperties(exampleObject);
