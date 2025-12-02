interface Person {
    name: string;
    age: number;
    email: string;
}
declare class PersonManager {
    private people;
    addPerson(person: Person): void;
    listPeople(): void;
    findByAge(minAge: number): Person[];
}
declare const manager: PersonManager;
declare const people: Person[];
declare const adults: Person[];
//# sourceMappingURL=example2.d.ts.map