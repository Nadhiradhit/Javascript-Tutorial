# Javascript Tutorial (Break Dan Continue)

Break digunakan untuk mengentikan seluruh perulangan. Continue digunakan untuk mengehentikan perulangan saat ini yang sedang berjalan, lalu dilanjutkan ke perulangan selanjutnya.

## Sintaks Code Break

```bash

    let counter = 1

    while (true) -> While true digunakan untuk melakukan sebuah perulangan yang tidak berhenti 
    {
        document.writeln(`<p>Perulangan ke ${counter}</p>`)
        counter++

        if (counter > 10){
            break
        }
    }

```

## Sintaks Code Continue

```bash

    for(let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            continue
        }
        document.writeln(`<p>Perulangan Ganjil ${i}</p>`)
    }

```