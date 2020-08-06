const names = process.argv[2].split(',');
console.log(names);
const filterLists = (items,query) => {
  return items.filter((item) => item.includes(query))
};

console.log(filterLists(names,process.argv[3]));


