enum Role {
  ADMIN,
  READ_ONLY,
  DEVELOPER,
}

const person = {
  name: 'Che',
  age: 42,
  hobbies: ['Sport', 'Cooking'],
  role: Role.ADMIN,
}

let favActivities: string[]

favActivities = person.hobbies
console.log(favActivities)

if (person.role === Role.ADMIN) {
  console.log('HELLO ADMIN')
}
