// 1-masala
function Juftsonlar(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) sum += i;
    }
    return sum;
}

// 2-masala
function TrueQiymat(value: boolean): number {
    return value ? 1 : 0;
}


// 3-masalas
function Boshxarfi(name: string): string {
    return name.slice(0, 2);
}

// 4-masala
function ButunSon(num: number): number {
    return Math.round(num + 2);
}

// 5-masala
function ToStr(num: number): string {
    return (num + 1).toString();
}

// 6-masala
function Boo(str: string): void {
    for (const char of str) {
        console.log(char);
    }
}

// 7-masala
function TeskariQiymat(n: number): number[] {
    const result: number[] = [];
    for (let i = n; i >= -n; i--) {
        result.push(i);
    }
    return result;
}

// 8-masala
function foo(value: number): boolean {
    return value === 1;
}

// 9-masala
function booo(name: string, nationality: string): string {
    return `My name is ${name}. I'm ${nationality}.`;
}



console.log(Juftsonlar(7));
console.log(TrueQiymat(true));
console.log(Boshxarfi("Toshpolat"));
console.log(ButunSon(5.3));
console.log(ToStr(4)); 
Boo("salom dunyo"); 
console.log(TeskariQiymat(2)); 
console.log(foo(1)); 
console.log(booo("Teshavoy", "Qozogistondan"));
