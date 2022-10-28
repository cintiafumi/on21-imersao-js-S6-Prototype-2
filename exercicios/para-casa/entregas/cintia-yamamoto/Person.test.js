import Person from './Person.js';

describe('Person', () => {
  it('should create a Person with name and CPF', () => {
    const pessoa = new Person('Cintia', '12345678900')
    console.log(pessoa);
    expect(Person).toHaveBeenCalledTimes(1)
    expect(pessoa).toBeInstanceOf(Person)
  })
})