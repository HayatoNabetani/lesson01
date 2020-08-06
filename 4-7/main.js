// const names = [process.argv[2].split(',')];

// const filterLists = (items,query) => {
//   return items.filter((item) => item.includes(query))
// };

// console.log(filterLists(names,process.argv[3]));
const names = ["apple","banana","disny"];

const filterLists = (items,query) => {
  return items.filter((item) => item.includes(query))
};

console.log(filterLists(names,'a'));

