const filter = ([...all], [...failed]) => {
  const studens = [];
  for (let i = 0; i < all.length; i++) {
    for (let j = 0; j < failed.length; j++) {
      if (!(all[i].includes(failed[j]))) {
        studens.push(all[i]);
      }
    }
  }
  return studens;
}

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Гривенев'];
const faildStudents = ['Петров', 'Сидоров'];

console.log(filter(allStudents, faildStudents));;

