const names = process.argv[2].toLowerCase().split(',').sort();

const filterLists = (items,query) => {
  return items.filter((item) => item.includes(query))
};

console.log(filterLists(names,process.argv[3]));


