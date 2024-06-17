const mexico = new Map();

mexico.set('id', 24);
mexico.set('name', 'Mexico');
mexico.set('capital', 'Mexico City');
mexico.set('neighbors', ['USA', 'Guatemala', 'Belize']);
console.log(mexico);

mexico.set('id', 25);

//['USA', 'Guatemala', 'Belize']
mexico.get('neighbors').push('Honduras');
//['USA', 'Guatemala', 'Belize', 'Honduras']
console.log(mexico);
console.log(mexico.has('name')); // true
console.log(mexico.size); // 4 key value pairs
mexico.delete('name');
console.log(mexico); // deletes name key and value
