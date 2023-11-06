# Javascript Tutorial (Konversi String Dan Number)

Konversi string dan number ini digunakan untuk mengkonversikan sebuah data string ke number ketika kita ingin mengelola data itu dalam bentuk number.

## Permasalah tanpa adanya konversi

Kalian dapat melihat code tersebut:

```bash
    const value1 = "1"
    const value2 = 1;
    const sum = value1 + value2

    document.writeln(`<p>${sum}</p>`)
```
Berapakah hasil yang didapat apakah 2 atau 11? Jika 11 kenapa bisa dapat segitu?

Dikarenakan pada value 1 itu terdapat tipe data string yang dimana saat kita melakukan sebuah penambahan yang kebaca oleh kode program itu adalah dalam bentuk string dan hasilnya adalah 11.

## Function yang digunakan ketika ingin konversi string dan number

| Function             | Ket                                                               |
| ----------------- | ------------------------------------------------------------------ |
| ParseInt(string) | Konversi dari string ke number dalam bentuk bilangan bulat |
| ParseFloat(string) | Konversi dari string ke number dalam bentuk bilangan pecahan |
| Number(string) | Konversi dari string ke number dalam bentuk bilangan bulat maupun dalam bentuk bilangan pecahan |
| number.toString() | Konversi dari number ke string |

## Penjelasan NaN (Not a Number)

NaN adalah sebuah data string yang kita konversikan dan datanya tersebut salah atau data valid, maka hasil dari konversi tersebut adalah NaN. NaN juga bisa disebut number spesial yang dapat menyebutkan bahwa data itu bukanlah number, jika kalian mengoperasikan data NaN dengan data number lain maka hasilnya tetap NaN juga.

```bash
    document.writeln(`<p>${parseInt("salah")}</p>`) // NaN
    document.writeln(`<p>${parseFloat("1.2halo")}</p>`) // 1.1

    Pada Number() Maka jika ada data string tidak akan mentolelir kesalahan pada sebuah data
    document.writeln(`<p>${Number("Hello1.2")}</p>`)
```

## isNaN() Function

isNaN() dipakai ketika kita ingin mengecek apakah number itu adalah NaN atau bukan, dengan hasilnya yang berupa boolean, jika NaN maka hasilnya akan true, jika bukan maka hasilnya akan false

```bash
        const nan1 = Number("hasilnya NaN") // NaN
        const nan2 = 200
        const total2 = nan1 + nan2 // NaN

        document.writeln(`<p>${total2}</p>`)
        
        document.writeln(`<p>${isNaN(nan1)}</p>`) | true
        document.writeln(`<p>${isNaN(nan2)}</p>`) | false
```