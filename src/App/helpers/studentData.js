const students = [
  {
    id: 'student1',
    firstName: 'Jeremiah',
    isDead: false,
  },
  {
    id: 'student2',
    firstName: 'Austin',
    isDead: false,
  },
  {
    id: 'student3',
    firstName: 'Brooke',
    isDead: false,
  },
  {
    id: 'student4',
    firstName: 'Geno',
    isDead: false,
  },
  {
    id: 'student5',
    firstName: 'Gwynne',
    isDead: false,
  },
  {
    id: 'student6',
    firstName: 'Jeanine',
    isDead: false,
  },
  {
    id: 'student7',
    firstName: 'Jim',
    isDead: false,
  },
  {
    id: 'student8',
    firstName: 'Jonathan',
    isDead: false,
  },
  {
    id: 'student9',
    firstName: 'Joshua',
    isDead: false,
  },
  {
    id: 'student10',
    firstName: 'Kamiran',
    isDead: false,
  },
  {
    id: 'student11',
    firstName: 'Mark',
    isDead: false,
  },
  {
    id: 'student12',
    firstName: 'Matt',
    isDead: false,
  },
  {
    id: 'student13',
    firstName: 'Michael',
    isDead: false,
  },
  {
    id: 'student14',
    firstName: 'Nate',
    isDead: false,
  },
  {
    id: 'student15',
    firstName: 'Nick',
    isDead: false,
  },
  {
    id: 'student16',
    firstName: 'Nikhil',
    isDead: false,
  },
  {
    id: 'student17',
    firstName: 'Ola',
    isDead: false,
  },
  {
    id: 'student18',
    firstName: 'Pete',
    isDead: false,
  },
  {
    id: 'student19',
    firstName: 'Phonesalo',
    isDead: false,
  },
  {
    id: 'student20',
    firstName: 'Ryan',
    isDead: false,
  },
  {
    id: 'student21',
    firstName: 'William',
    isDead: false,
  },
];

const livingStudents = () => {
  const aliveStudents = [];

  students.forEach((student) => {
    if (student.isDead === false) {
      aliveStudents.push(student);
    }
  });
  return aliveStudents;
};

const dearlyBeloved = () => {
  const deadStudents = [];

  students.forEach((student) => {
    if (student.isDead === true) {
      deadStudents.push(student);
    }
  });
  return deadStudents;
};

const getStudents = () => students;

// random student eater
// button clicks to display tank and graveyard and all students
// double check dead stuff

export default { getStudents, livingStudents, dearlyBeloved };
