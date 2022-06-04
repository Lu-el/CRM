'use strict';

const filter = (all, failed) => {
  const students = [...all];
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < failed.length; j++) {
      if (students[i] === failed[j]) {
        students.splice(i, 1);
      }
    }
  } return students;
}

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Гривенев', 'Стармоусов', 'Любая'];
const faildStudents = ['Иванов', 'Петров', 'Стармоусов'];

console.log(`Task01 - ${filter(allStudents, faildStudents)}`);

