var person = { firstName: 'Thomas', lastName: 'Jefferson', hobby: 'Wearing wigs' };
console.log(person);

var fullName = person.firstName + ' ' + person.lastName + '.';
console.log('The persons full name is:', fullName);

person.job = 'POTUS' + '.';
console.log('The persons job is:', person.job);

person.previousjob = 'Author' + '.';
console.log('The persons previous job was:', person.previousjob);

console.log('The complete person object:', person);
