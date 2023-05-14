"use strict";
// any
//let person : any = { name: 'Kim Hanbin' }
//person();  //menyebabkan error person bukan fungsion tapi objek
// unknown
let nilaiUjian;
nilaiUjian = 100;
let nilaiAkhir;
if (typeof nilaiUjian === 'number') {
    nilaiAkhir = nilaiUjian + 100;
    console.log(`nilai: ${nilaiAkhir}`);
}
//boolean
let benarAtauSalah = true;
let benar = true;
let salah = false;
//number & bigint
let harga1 = 10000;
let harga2 = 20000000;
//let angkaBesar:bigint= 100n;
//string
const userName = 'Skilvul';
console.log(userName.charAt(0));
console.log(userName.toUpperCase());
//symbol
let a = Symbol('a');
let b = Symbol('a');
console.log(a === b);
//meskipun valuenya sama mereka tidak sama alias unik
//object
