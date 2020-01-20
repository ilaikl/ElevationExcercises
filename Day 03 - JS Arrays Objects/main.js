//arrays

// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
// const genes2 = []

// genes2.push(genes[0])
// genes2.push(genes[1])
// genes2.push(genes[4])
// genes2.push(genes[2])
// genes2.push(genes[3])
// genes2.push(genes[3])
// genes2.unshift('FXT')

// console.log('ssss', genes2)

//objects
//1

// let p1 = {
//     name: 'FF',
//     age: 2,
//     city: 'SSS'
// }


// let p2 = {
//     name: 'HG',
//     age: 4,
//     city: 'SSS'
// }

// if(p1.age == p2.age)
//     if(p1.city == p2.city)
//         console.log("Jill wanted to date Robert")
//     else    
//         console.log("Jill wanted to date Robert, but couldn't")

// //4
// const library = {
//     books:[],
// }
// let book;

// while(book !='stop')
// {
//     book = prompt('enter book')
//     library.books.push(book)
//     console.log(library)
// }


//5

// const reservations = {
//     bob: { claimed: false },
//     ted: { claimed: true }
// }

// const name = prompt('Please enter the name for your reservation');

// if (!(name.toLowerCase() in reservations)) 
//     reservations[name] = {'claimed' : true}
// else
//     if (reservations[name].claimed)
//         console.log("Already Claimed")
//     else
//         console.log("Welcome")

// console.log(reservations)

//...........LOOPS.......................


//1

// let arr = [7, 1, 3, 5, 7, 5, 5,5, 3, 7, 7,7,7,7,5,3,5,7,1,1,3,5,7,5,5,5,1,1,1,1,1, 5, 1]
// let numsObj = {}
// var i
// for (i = 0; i < arr.length; i++) {
//     if (!(arr[i] in numsObj))
//         numsObj[arr[i]] = 1
//     else
//         numsObj[arr[i]] += 1
// }

// Object.keys(numsObj).forEach(key => {
//     if (numsObj[key] % 2 != 0)
//         console.log(key);
// })

// console.log(numsObj);

//2
// // http://stackoverflow.com/questions/962802#962890
// function shuffle(array) {
//   var tmp, current, top = array.length;
//   if(top) while(--top) {
//     current = Math.floor(Math.random() * (top + 1));
//     tmp = array[current];
//     array[current] = array[top];
//     array[top] = tmp;
//   }
//   return array;
// }
// a = shuffle(a);

//2
let a = []
for (i=0;i<40;++i) a[i]=i;
let missing = a.splice(Math.floor(Math.random()*a.length), 1);


console.log(a)
console.log(missing)

//answer:
let num=0;
let sum=a.length;
for(i=0;i<a.length;i++) {num+=a[i]; sum+=i}
num=sum-num;
console.log("My ans: " + num)
