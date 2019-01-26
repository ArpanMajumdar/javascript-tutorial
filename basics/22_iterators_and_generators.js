// Iterator

function nameIterator(names) {
    let index = 0;
    return {
        next: function () {
            return index < names.length ?
                { value: names[index++], done: false } :
                { done: true }
        }
    }
}

const names = ['Arpan', 'Tejas', 'Sandeep', 'Moni'];

// Names iterator returns an iterator to iterate through names
const namesIter = nameIterator(names);

console.log(namesIter.next());
console.log(namesIter.next());
console.log(namesIter.next());
console.log(namesIter.next());
console.log(namesIter.next());


// Generator

// Name generator
function* sayNames() {
    yield 'Arpan';
    yield 'Monirul';
    yield 'Sandeep';
    yield 'Tejas';
}

const nameGenerator = sayNames();
console.log(nameGenerator.next().value);
console.log(nameGenerator.next().value);
console.log(nameGenerator.next().value);
console.log(nameGenerator.next().value);
console.log(nameGenerator.next());

// ID generator

function* generateID() {
    let id = 1;

    while (true) {
        yield id++;
    }
}

const idGenerator = generateID();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

