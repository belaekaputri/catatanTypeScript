// any
//let person : any = { name: 'Kim Hanbin' }
//person();  //menyebabkan error person bukan fungsion tapi objek

// unknown
let nilaiUjian: unknown;
nilaiUjian =100;
let nilaiAkhir;
if (typeof nilaiUjian === 'number'){
    nilaiAkhir = nilaiUjian + 100;
    console.log(`nilai: ${nilaiAkhir}`);
}

//boolean
let benarAtauSalah: boolean =true;
let benar: true =true;
let salah= false;

//number & bigint

let harga1: number =10000;
let harga2: number =20_000_000;

//let angkaBesar:bigint= 100n;

//string
const userName:string= 'Skilvul';
console.log(userName.charAt(0))
console.log(userName.toUpperCase())

//symbol
let a = Symbol('a');
let b:symbol = Symbol('a');
console.log(a===b);
//meskipun valuenya sama mereka tidak sama alias unik


//object