class Rekening{
    nama:string ="bela";
    umur:number=25;
    saldo:number=10_000_000;

constructor(nama:string,umur:number,saldo?:number){
    this.nama=nama;
    this.umur=umur;
    this.saldo=saldo??0;
}
    deposit(jumlahDeposit:number):void{
        this.saldo=this.saldo+jumlahDeposit;
    }
    withdraw(jumlahPenarikan:number):void{
        this.saldo=this.saldo-jumlahPenarikan;
    }
}
//let rekeningBela= new Rekening("bela",20,10_00_000);
//console.log(rekeningBela.nama);
//rekeningBela.deposit(1_000);
//console.log(rekeningBela.saldo);
class rekeningTabungan extends Rekening{
    bunga:number;
    constructor(nama:string,umur:number,saldo:number,bunga:number){
        super(nama,umur,saldo);
        this.bunga=bunga;
    }
}
interface IBunga{
    hitungBunga:(bungaSaatIni:number)=>void
} 
class RekeningInvestasi extends Rekening implements IBunga{
    hitungBunga(bungaSaatIni: number){
        this.saldo= this.saldo+(this.saldo*bungaSaatIni);
    }
 
}  

let rekeningBela= new rekeningTabungan("bela",20,10_00_000,10);