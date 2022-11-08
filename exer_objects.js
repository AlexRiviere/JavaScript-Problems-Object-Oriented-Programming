// Buggy Code 1

// const helloVictor = createGreeter('Victor');
// helloVictor.greet('morning'); // 'Good Morning Victor'

// function createGreeter(name) {
//   return {
//     name,
//     morning: 'Good Morning',
//     afternoon: 'Good Afternoon',
//     evening: 'Good Evening',
//     greet(timeOfDay) {
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${this.morning} ${name}`;
//           break;
//         case 'afternoon':
//           msg += `${this.afternoon} ${name}`;
//           break;
//         case 'evening':
//           msg += `${this.evening} ${name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }



// Buggy Code 2

// const item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount(percent) {
//     const discount = this.price * percent / 100;
//     return this.price - discount;
//   },
// };

// console.log(item.discount(20));   // should return 40
// // = 40
// console.log(item.discount(50));   // should return 25
// // = 20
// console.log(item.discount(25));   // should return 37.5
// = 15

// problem was we were reassigning the price each time when we just needed to return the new price




// Testing object Equality

// function objectsEqual(obj1, obj2) {
//   let obj1Keys = Object.keys(obj1);
//   let obj2Keys = Object.keys(obj2);
//   if (obj1Keys.length !== obj2Keys.length) return false;
//   if (!obj1Keys.every((key, index) => key === obj2Keys[index])) return false;
//   return obj1Keys.every(key => {
//     return obj1[key] === obj2[key]; 
//   });
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false




// Student

function createStudent(name, year) {
  return {
    name,
    year,
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    
    courses: [],
    listCourses() {
      console.log(this.courses);
    },
    addCourse(course) {
      this.courses.push(course);
    },
    
    addNote(code, note) {
      // find course with this code
      // reassign note property to this note argument
      let courseToBeModified = this.findCourse(code);
      if (courseToBeModified.notes) {
        courseToBeModified.notes.push(note);
      } else {
        courseToBeModified.notes = [note];
      }
    },
    
    viewNotes() {
      for (let i = 0; i < this.courses.length; i += 1) {
        if (this.courses[i].notes) {
          console.log(`${this.courses[i].name}: ${this.courses[i].notes.join('; ')}`); 
        }
      }
    },
    
    updateNote(code, note) {
      let courseToBeModified = this.findCourse(code);
      courseToBeModified.notes = [note];
    },
    
    findCourse(code) {
      return this.courses.find(course => course.code === code);
    }
  };
}

// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// // foo.listCourses();
// foo.viewNotes();
// // // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // // "Math: Fun course; Remember to study for algebra"
// // // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // // "Math: Fun course"
// // // "Advanced Math: Difficult subject"




function createStudent(name, year) {
  return {
    name,
    year,
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    
    courses: [],
    listCourses() {
      console.log(this.courses);
    },
    addCourse(course) {
      this.courses.push(course);
    },
    
    addNote(code, note) {
      // find course with this code
      // reassign note property to this note argument
      let courseToBeModified = this.findCourse(code);
      if (courseToBeModified.notes) {
        courseToBeModified.notes.push(note);
      } else {
        courseToBeModified.notes = [note];
      }
    },
    
    viewNotes() {
      for (let i = 0; i < this.courses.length; i += 1) {
        if (this.courses[i].notes) {
          console.log(`${this.courses[i].name}: ${this.courses[i].notes.join('; ')}`); 
        }
      }
    },
    
    updateNote(code, note) {
      let courseToBeModified = this.findCourse(code);
      courseToBeModified.notes = [note];
    },
    
    findCourse(code) {
      return this.courses.find(course => course.code === code);
    }
  };
}


// School

let school = {
  students: [],
  addStudent(name, year) {
    if (!['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      console.log('Invalid Year');
      return;
    };
    let student = createStudent(name, year);
    this.students.push(student);
    return student;
  },
  
  enrollStudent(studentName, course) {
    let studentObj = this.findStudent(studentName);
    studentObj.addCourse(course);
  },
  
  addGrade(studentName, courseCode, grade) {
    let studentObj = this.findStudent(studentName);
    let courseObj = studentObj.findCourse(courseCode);
    courseObj.grade = grade;
  },
  
  findStudent(studentName) {
    return this.students.find(({name}) => name === studentName);
  },
  
  getReportCard(studentName) {
    let studentObj = this.findStudent(studentName);
    studentObj.courses.forEach(({name, grade}) => {
      console.log(`${name}: ${grade ? grade : 'In Progress'}`);  
    });
  },
  
  courseReport(courseName) {
    console.log(`=${courseName} Grades=`);
    let studentsAndTheirGrades = {};
    this.students.forEach( function(studentObj) {
      // courses is an array of objects
      studentObj.courses.forEach( function(course) {
        if (course.name === courseName) {
          studentsAndTheirGrades[studentObj.name] = course.grade;
        }
      });
    });
    
    if (Object.values(studentsAndTheirGrades).some(value => value === undefined)) {
      console.log(undefined);
      return;
    };
    
    let average = Math.floor(Object.values(studentsAndTheirGrades).reduce( function(sum, num) {
      return sum + num;  
    }) / Object.values(studentsAndTheirGrades).length)
    
    Object.keys(studentsAndTheirGrades).forEach(key => {
      console.log(`${key}: ${studentsAndTheirGrades[key]}`);  
    });
    console.log(`Course Average: ${average}`);
  },
};

school.addStudent('foo', '3rd');
school.enrollStudent('foo', { name: 'Math', code: 101 });
school.enrollStudent('foo', { name: 'Advanced Math', code: 102 });
school.enrollStudent('foo', { name: 'Physics', code: 202, });
school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);

school.addStudent('bar', '1st');
school.enrollStudent('bar', { name: 'Math', code: 101 });
school.addGrade('bar', 101, 91);

school.addStudent('qux', '2nd');
school.enrollStudent('qux', { name: 'Math', code: 101 });
school.enrollStudent('qux', { name: 'Advanced Math', code: 102 });
school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);

school.courseReport('Physics');

// school.getReportCard('qux');

// console.log(school.students);
// console.log(school.students[0]);
// console.log(school.students[1]);
// console.log(school.students[2]);
