//array
let bilangandibwah5:number[]=[1,2,3,4,5];

//tuples
let karyawan: [string,string,number]=['bi','programmer',20]

//null & undefined
type Urang={
    name:string
    age: number
    partner: string | null
}
let bobo:Urang={
    name:'jomblo',
    age:25,
    partner:null
}

//void & never:mempresetasikan sesuatu yg tdk pernah muncul
function log(message:string):void{ //fungsi yg tidak mengembalikan nilai
    console.log(message);
}

function error(message:string):never{
    throw new Error(message)
};

