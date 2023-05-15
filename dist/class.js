"use strict";
class Rekening {
    constructor(nama, umur, saldo) {
        this.nama = "bela";
        this.umur = 25;
        this.saldo = 10000000;
        this.nama = nama;
        this.umur = umur;
        this.saldo = saldo !== null && saldo !== void 0 ? saldo : 0;
    }
    deposit(jumlahDeposit) {
        this.saldo = this.saldo + jumlahDeposit;
    }
    withdraw(jumlahPenarikan) {
        this.saldo = this.saldo - jumlahPenarikan;
    }
}
//let rekeningBela= new Rekening("bela",20,10_00_000);
//console.log(rekeningBela.nama);
//rekeningBela.deposit(1_000);
//console.log(rekeningBela.saldo);
class rekeningTabungan extends Rekening {
    constructor(nama, umur, saldo, bunga) {
        super(nama, umur, saldo);
        this.bunga = bunga;
    }
}
class RekeningInvestasi extends Rekening {
    hitungBunga(bungaSaatIni) {
        this.saldo = this.saldo + (this.saldo * bungaSaatIni);
    }
}
let rekeningBela = new rekeningTabungan("bela", 20, 1000000, 10);
