

// let 


// const getSections = () => {
//     if (words.length === 0) {
//       return [];
//     }
//     return Object.values(
//       words.reduce((acc, word) => {
//         let firstLetter = word[0].toLocaleUpperCase();
//         if (!acc[firstLetter]) {
//           acc[firstLetter] = { title: firstLetter, data: [word] };
//         } else {
//           acc[firstLetter].data.push(word);
//         }
//         return acc;
//       }, {})
//     );


let array = 
    [{"address": "Calle de Abd\u00f3n terradas, 1", "zip code": "28015", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.701363888888889, 40.43469722222222]}, {"address": "Calle de Abd\u00f3n terradas, 2", "zip code": "28015", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.701463888888889, 40.434797222222215]}, {"address": "Calle de Abd\u00f3n terradas, 3", "zip code": "28015", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.7013805555555557, 40.434713888888886]}, {"address": "Calle de Abd\u00f3n terradas, 3", "zip code": "28015", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.7013888888888893, 40.43472222222222]}, {"address": "Calle de Abd\u00f3n terradas, 4", "zip code": "28015", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.7014750000000003, 40.43480833333333]}, {"address": "Calle de Abd\u00f3n terradas, 5", "zip code": "28015", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.7013972222222224, 40.434730555555554]}, {"address": "Calle de Abd\u00f3n terradas, 6", "zip code": "28015", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.7014750000000003, 40.43480833333333]}, {"address": "Calle de Abd\u00f3n terradas, 7", "zip code": "28015", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.7014055555555556, 40.43473888888889]}, {"address": "Calle de Abd\u00f3n terradas, 9", "zip code": "28015", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.701419444444445, 40.434752777777774]}, {"address": "Calle de Abd\u00f3n terradas, 10", "zip code": "28015", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.701497222222222, 40.43483055555555]}, {"address": "Calle de Abd\u00f3n terradas, 12", "zip code": "28015", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.7015083333333334, 40.434841666666664]}, {"address": "Calle de Abel, 1", "zip code": "28039", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.7164638888888892, 40.449797222222216]}, {"address": "Calle de Abel, 1", "zip code": "28039", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.7164638888888892, 40.449797222222216]}, {"address": "Calle de Abel, 2", "zip code": "28039", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.716563888888889, 40.44989722222222]}, {"address": "Calle de Abel, 3", "zip code": "28039", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.716475, 40.44980833333333]}, {"address": "Calle de Abel, 4", "zip code": "28039", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.716602777777778, 40.44993611111111]}, {"address": "Calle de Abel, 5", "zip code": "28039", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.716616666666667, 40.449949999999994]}, {"address": "Calle de Abel, 6", "zip code": "28039", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.7001250000000003, 40.450125]}, 
{"address": "Calle de Abel, 7", "zip code": "28039", "city": "Madrid", "country": "Espa\u00f1a", "coordinates": [-3.700013888888889, 40.45001388888889]}]


// fetch('./MadridSt.json')
//     .then( res => res.json())
//     .then (data =>{ 
//         Addresses = data
//         console.log(Addresses)
//         })

let map = ((m, a) => (a.forEach(s => {
  let a = m.get(s[0]) || [];
  m.set(s[0], (a.push(s), a));
}), m))(new Map(), array);

let string = "Lagos"
let firstLetter = string.substr(0,1)

let arrayToEvaluate = map.get("c")
// console.log(arrayA)
console.log(arrayToEvaluate)
// console.log(map.get("a"));
// console.log(map.get("b"));
// console.log(map.get("c"));


// let eachLetter = array.filter(item =>{
//     if (array.address.substr(5,6) === "A") {
//         const regex = new RegExp(inputValue[0], 'gi');
//         return (item.address.match(regex));