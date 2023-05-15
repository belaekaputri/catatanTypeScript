function tambahAngka(a:number, b:number):number{
    return a+b;
}

function tambah(a?: number, b?: number): number {
	return (a ?? 0) + (b ?? 0);
};

tambah(1,2);