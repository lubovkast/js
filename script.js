//пункт 2
let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 +'3',
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 *653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = + "123",
    a16 = 1 ||0,
    a17 = false ||true,
    a18 = true > 0;
    console.log (a1, typeof a1);
    console.log (a2, typeof a2);
    console.log (a3, typeof a3);
    console.log (a4, typeof a4);
    console.log (a5, typeof a5);
    console.log (a6, typeof a6);
    console.log (a7, typeof a7);
    console.log (a8, typeof a8);
    console.log (a9, typeof a9);
    console.log (a10, typeof a10);
    console.log (a11, typeof a11);
    console.log (a12, typeof a12);
    console.log (a13, typeof a13);
    console.log (a14, typeof a14);
    console.log (a15, typeof a15);
    console.log (a16, typeof a16);
    console.log (a17, typeof a17);
    console.log (a18, typeof a18);

//пункт 3
let   height = 10,
       width = 23;
let SPryam = height * width;
console.log (SPryam, typeof SPryam);

//пункт 4
let h = 10,
    d =  a7,
    П= 3.14;
let VCilindra =h * П * d**2 / 4;
console.log (VCilindra, typeof VCilindra);

//пункт 5
let r = 5;
let SKruga = П * r**2;
console.log (SKruga, typeof SKruga);

//пункт 6
let a = 5,
    b = 7;
let STrap = (a + b) / 2 * h;
console.log (STrap, typeof STrap);

//пункт 7
//Месячная процентная ставка = 10% / 12 = 0.0083
// коэффициент аннуитета  0.0083× (1 + 0.0083)18 / ((1 + 0.0083)18 − 1) 
let S = 2000000,
    p = 10,
    years = 5;
let result = p /100/12; //проценты
let Pereplata = result* (1+ result)**18/ ((1+result)**18-1)
    console.log (Pereplata, typeof Pereplata);

//пункт 8
let A = 8,
    B= 3;
let X = (16-A)/2+B;
let X2 = (15*B-A)/(6-B);
let X3 = 23780/(2+A+B);
console.log (X);
console.log (X2);
console.log (X3);






