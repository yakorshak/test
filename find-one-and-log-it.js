export function findOneAndLogIt() {
  const array = [1, "", 23, 1, "jdsafj"];
  const newArray = array.filter((element) => element === 1);

  console.log(newArray);
  console.log(newArray);
}

findOneAndLogIt();
