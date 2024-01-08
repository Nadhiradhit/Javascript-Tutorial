let counter = 1

// Break
while (true) {
    document.writeln(`<p>Perulangan While ke ${counter}</p>`)
    counter++
    
    if( counter > 20){
        break 
    }
}

// Continue
for(let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue
    }
    document.writeln(`<p>Perulangan Ganjil ${i}</p>`)
}