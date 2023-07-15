 
const resourceTypes={}
resourceTypes._rawValue = [
    {_id: "a", name: "roottype"},
    {_id: "b", parent: "abab"},
    {_id: "c", parent: "abab"},
    {_id: "d", parent: "abab"}
];

console.log('resourceTypes._rawValue');
console.log(resourceTypes._rawValue);

var arrtest = resourceTypes._rawValue.map(
    (x) => {
        return x;
    },
    {
        _id: "dsa",
    }

);
console.log('arrtest');
console.log(arrtest);


console.log('resourceTypes._rawValue');
console.log(resourceTypes._rawValue);

