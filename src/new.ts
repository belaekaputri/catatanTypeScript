//type
type Person={
    name: string,
    age:number
}

let hanbin:Person={
    name: 'hanbin',
    age: 27
}

//union type seperti OR == ||
type Hewan ='mamalia' | 'amfibi' | 'unggas'
let ayam: Hewan ='unggas';

//intersecion type SEPERTI AND == &&

type Karyawan={
    id:string
    nama:string
}
type KarywanTetap={
    email:string
    jabatan:string
}

type KaryawanYangTetap = Karyawan & KarywanTetap;
let karyawanTetap: KaryawanYangTetap={
id: 'K001',
nama: 'june',
email: 'june@karyawan.com',
jabatan: 'junior programmer'
}