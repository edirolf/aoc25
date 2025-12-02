"use strict";
class PersonManager {
    people = [];
    addPerson(person) {
        this.people.push(person);
        console.log(`✅ Added ${person.name} to the list`);
    }
    listPeople() {
        console.log('\n👥 People in the system:');
        this.people.forEach((person, index) => {
            console.log(`${index + 1}. ${person.name} (${person.age}) - ${person.email}`);
        });
    }
    findByAge(minAge) {
        return this.people.filter(person => person.age >= minAge);
    }
}
// Demo usage
console.log('🏢 Person Manager Demo');
console.log('='.repeat(30));
const manager = new PersonManager();
// Add some sample people
const people = [
    { name: 'Alice Johnson', age: 28, email: 'alice@example.com' },
    { name: 'Bob Smith', age: 34, email: 'bob@example.com' },
    { name: 'Charlie Brown', age: 22, email: 'charlie@example.com' },
    { name: 'Diana Prince', age: 31, email: 'diana@example.com' }
];
people.forEach(person => manager.addPerson(person));
manager.listPeople();
console.log('\n🔍 People aged 30 or older:');
const adults = manager.findByAge(30);
adults.forEach(person => {
    console.log(`- ${person.name} (${person.age})`);
});
//# sourceMappingURL=example2.js.map