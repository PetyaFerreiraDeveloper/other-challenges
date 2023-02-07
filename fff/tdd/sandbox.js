


let url = `https://jsonplaceholder.typicode.com/posts`;

let result = fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));

console.log(Array.isArray(result))
let arr = Object.entries(result);

console.log(arr)

// result.map(result => console.log(result.title));