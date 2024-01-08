// for(; ;){
//     alert("For Loop")
// }

let counter = 1

for( ; counter <= 10; ){
    document.writeln(`<p style="color:blue;">Perulangan For ke ${counter} </p>`)
    counter++
}

// Dengan Init Statement
for( counter = 5; counter <= 15; ){
    document.writeln(`<p style="color:red;">Perulangan For ke ${counter} </p>`)
    counter++
}

// Dengan Post Statemnet
for( let counter = 10; counter <= 20;  counter++){
    document.writeln(`<p style="color:green;">Perulangan For ke ${counter} </p>`)
}