let emptyArray = [];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log("longueur de webtechs : ", webTechs.length);
let firstItem = webTechs[0];
console.log("premier item : ", firstItem);

let middleItem = webTechs[Math.floor(webTechs.length / 2)];
console.log("item du milieu : ", middleItem);

let lastItem = webTechs[webTechs.length - 1];
console.log("dernier item : ", lastItem);

// mixedDataTypes

let mixedDataTypes = [];

mixedDataTypes.push(Array("mixed", "data", "types"), 5, null, "finish", true);
console.log(`mix : ${mixedDataTypes} de longueur ${mixedDataTypes.length}`);

console.log(mixedDataTypes);

//itCompanies

let itCompanies = [];
itCompanies.push(
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon"
);
itCompanies.push(`Nombre d'entreprises : ${itCompanies.length}`);
console.log(itCompanies);

let firstCompany = itCompanies[0];
console.log("1ère entreprise : ", firstCompany);

let middleCompany = itCompanies[Math.floor(itCompanies.length / 2) - 1];
console.log("2e entreprise : ", middleCompany);

let thirdCompany = itCompanies[itCompanies.length - 2];
console.log("3e entreprise : ", thirdCompany);

itCompanies.map((company) => console.log(company));

let upperCompanies = itCompanies
  .slice(0, [itCompanies.length - 1])
  .map((company) => company.toUpperCase());
console.log(upperCompanies);

upperCompanies.splice([upperCompanies.length - 1], 0, "and");
console.log(upperCompanies);

console.log(`${upperCompanies.join(", ")} are big IT companies`);

function companiesExist(company) {
  if (itCompanies.includes(company)) {
    return company;
  } else {
    return `${company} not found`;
  }
}
console.log(companiesExist("Apple"));

function testO() {
  let counter = 0;
  for (let i = 0; i < itCompanies.length; i++) {
    let testStr = itCompanies[i].split();
    for (let j = 0; j < testStr.length; j++) {
      if (testStr[j].toLowerCase() === "o") {
        counter += 1;
      }
    }
    if(counter > 1){
      console.log("compteur :", counter);
      itCompanies.splice(itCompanies[i], 1)
    }
  }
  console.log("avant rendu : ", itCompanies);
  return itCompanies;
}

console.log("check : ", testO());

// let checkO = itCompanies.filter(
//   (company) => !company.toLowerCase().includes("o")
// );
// console.log(checkO);

// let sortCompanies = itCompanies.sort();
// console.log(sortCompanies);

// console.log(itCompanies.reverse());
