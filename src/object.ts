
let daftarKursiBus:{
    [nomorKursi:string]: string
}={
    '1A': 'hanbin',
    '1B': 'Bobby'
}

let person: {
    name: string,
    umur: number,
    partner?:string
} = {
   name:'Bambang',
   umur:20
}


type personb= {
    name: string,
    umur: number,
    partner?:string //jika properti tidak dipakai maka tidak error
} 
let urang:personb={
   name:'Bambang',
   umur:20
}

interface PersonA {
    name: string,
    umur: number,
    partner?:string
}