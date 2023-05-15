
//пункт 1
/*let name = prompt ('Ваше имя?');
alert('Ваше  имя ' +  name);
console.log('Ваше имя ' + name);

let age = prompt ('Ваш возраст?');
alert('Вам ' +  age + ' лет!');
console.log('Вам ' +  age + ' лет!');

let city = prompt ('Ваш город проживания?');
alert('Ваш город ' + city);
console.log('Ваш город ' + city);

let phone = prompt ('Ваш номер телефона?');
alert(' Ваш номер телефона ' + phone);
console.log('Ваш номер телефона ' + phone);

let email = prompt ('Ваш e-mail?');
alert('Ваш email ' + email);
console.log('Ваш email ' + email);

let company = prompt ('Как называется компания, в которой вы работаете?');
alert('Вы работаете  в ' + company);
console.log('Вы работаете  в ' + company);

document.write('Мое имя Свит. Мне 30 лет. Проживаю в Минске.Я работаю на дому. Мои контактные данные: номер телефона +375 29 3011111, e-mail: fbgfbfg-777@mail.ru.' + "<br>");

//пункт 2
x=2023;
let birthYear = x - age;
document.write ('Мое  имя ' + name + ' мне ' + age + ' лет! ' + 'Я родился в ' + birthYear + ' году');
console.log('Мое  имя ' + name + ' мне ' + age + ' лет!' + ' Я родился в ' + birthYear + ' году');
*/

//пункт 3
let str = '123321';
   if ((1+2+3) <(3+2+1))
   {
    console.log('неправильно');
} else if  ((1+2+3) > (3+2+1)) {
    console.log('неправильно.попробуй еще');
} else  {
    console.log ('да,молодец');
}

//пункт 4
let a= prompt ('число a больше или меньше нуля? (введите число)');
 if (a< 0) {
            console.log ('Неверно');
 } else  { (a >= 0)
        console.log ('Верно',);
 } 

 //пункт 5
 let A=10,
     B=2;
let SUM= A+B;
let SUM2= A-B;
let SUM3= A*B;
let SUM4= A/B;
console.log (SUM);
console.log (SUM2);
console.log (SUM3);
console.log (SUM4);

if(SUM > 1) { 
    console.log (SUM**2);
    //code- код
} 
if(SUM2 > 1) { 
    console.log (SUM2**2);
    //code- код
} 
if(SUM3 > 1) { 
    console.log (SUM3**2);
    //code- код
} 
if(SUM4 > 1) { 
    console.log (SUM4**2);
    //code- код
} 

 //пункт 6
  if (A < 11 && A > 2) {
    console.log ('ВЕРНО');
  } else {(A >= 11 && A <= 2) 
    console.log ('НЕ ВЕРНО');
  }
  if (B < 6 && B >=14) {
    console.log ('НЕ ВЕРНО');
  } else { (B>= 6 && B < 14) 
    console.log ('ВЕРНО');
  }

   //пункт 7
   let N=47;
if (0 == N || N <=15) {
    console.log ('1 четверть');
}else  if (16 <= N && N <=30) {
    console.log ('2 четверть');
}else  if (31 <= N && N <= 45) {
    console.log ('3 четверть');
} else { (46 <= N && N <= 59)
    console.log ('4 четверть');
}


//пункт 8
let day=20;

 if (day == 0 && day <= 10) {
    console.log ('1 декада');
} else if (11 <= day && day <= 20) {
    console.log ('2 декада');
} else { (21 <= day && day <= 31)
    console.log ('3 декада');
}

//пункт 9
/* 1 год=365 дней
   1 год=12 месяцев 365/12
   1 год =    дней    365/30,5
   1 год = 52,18 недель
   1 год = 8765,8 часа
   1 год = 525 949,2 минуты
   1 месяц=31 день   1 месяц=1/12 года
   1 месяц = 4 недели 1 неделя =
   1неделя =7 суток 1 сутки =1/7недели   1сутки=1/365года
   1 день = 24 часа 1/24 суток
   1 час= 60 минут 8760 */
   let month= 'Август';


let str11 = 'month' + 'day' ;

 switch (month){

         case ('Январь', 'Февраль', 'Декабрь'):
             console.log ('зима');
         break;// первый кейс
         case ('Июнь', 'Июль', 'Август'):
             console.log ('лето');
         break;// второй кейс
         case ('Март', 'Апрель','Май'):
             console.log ('весна');
         break; //третий кейс
         case ('Сентябрь', 'Октябрь', 'Ноябрь'):
             console.log ('осень');
         break;// четвертый кейс


         System.out.println (month  + day+ ".");
 }





 
       switch (month) {
            case ('Январь', 'Февраль', 'Декабрь'):
                console.log ('зима');
            break;// первый кейс
            case ('Июнь', 'Июль', 'Август'):
                console.log ('лето');
            break;// второй кейс
            case ('Март', 'Апрель','Май'):
                console.log ('весна');
            break; //третий кейс
            case ('Сентябрь', 'Октябрь', 'Ноябрь'):
                console.log ('осень');
            break;// четвертый кейс
                default:
            break;
       }

      switch (day) {
            case ('day == 0 && day <= 10'):
                console.log ('1 декада');
            break;// первый кейс
            case ('11 <= day && day <= 20'):
                console.log ('2 декада');
            break;// второй кейс
            case ('46 <= N && N <= 59'):
                console.log ('3 декада');
            break; //третий кейс

            default:
                break;
        }
    
   //return result;
