// let age = 15
// let name = 'mehdi'
// let canDrive = false


// // let me = {
// //     name: 'Mehdi',
// //     email: 'mehdi@gmail.com',
// //     age: 15
// // }
// // console.log(me)


// // // personne.name = "mehdi"
// // // console.log(personne)

// // // delete personne.age
// // // console.log(personne)


// // // const array = ["mehdi" , "mouad" ,"oussama" , "zakariya" , 1]
// // // const array2 = [ 3, 99,1,-44 , 15, 91]
// // // console.log(array.sort())
// // // console.log(array2.sort())








// let randomarray = [name, age, 56, "mehdi", canDrive, "brahim", false, true ,[1,55,33] , { cheveux: "black" , yeux:{couleur:"bleu" , width:2 , height:1 , isOpened:true }}]

// let index_brahim = randomarray.indexOf("brahim")
// console.log(randomarray[index_brahim])

// console.log(randomarray[9].yeux.width);

// let number = 9

// for (let index = 0; index <= randomarray.length -1; index++) {
//     // console.log(randomarray[index])
// }

function somme(a = 0, b = 0) {
    let z = a + b
    console.log(a + " + " + b + " = " + z)
}

somme()
somme(4, 33)
function multiplication(a) {
    for (let index = 0; index <= 11; index++) {
        console.log( a + " x " +index+ " = " +a * index)
    }
}
multiplication(7)


let comp = 0

while(comp <= 11){
    console.log(comp)
    comp++
}
console.log("================================================================")
comp = 0
let nmbr = 9
while(comp <= 11){
    console.log(nmbr+" x "+ comp+ " = "+ comp*nmbr)
    comp++
}


let title = document.body.querySelector("h3");
console.log(title)