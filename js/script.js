/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
/* let numberOfFilms;  */
/* function showMyDB(stat){
    if(!stat){
        console.log(personalMovieDB);
    }
} */
/* function start (){
    numberOfFilms= +prompt('How much films do you watched ?','15');
    while(numberOfFilms ==""|| numberOfFilms==null ||isNaN(numberOfFilms)){
        numberOfFilms= +prompt('How much films do you watched ?',''); 
    }
} */
function writeYourGenres (genres) {
    for(let i=0; i<3; i++){
        genres[i]=prompt(`Ваш любимый жанр под номером ${i+1}`,'');
    }
    
}
   
const personalMovieDB ={
    count: 0,
    movies: {},
    actors: {},
    gennres: [],
    privat : true,
    showMyDB: function(stat){
        if(!stat){
        console.log(personalMovieDB);
        }
    },
    start: function (){
        personalMovieDB.count= +prompt('How much films do you watched ?','15');
        while(personalMovieDB.count ==""|| personalMovieDB.count==null ||isNaN(personalMovieDB.count)){
            personalMovieDB.count= +prompt('How much films do you watched ?',''); 
        }
    },
    rememberMyFilms: function () {
        for(let i =0; i<2; i++){
            const a=prompt("Один із останніх фільміф які ви переглядали", ''),
                  b=prompt("На скільки оціните його по 10-ти більній шкалі", '');
            if(a!=null && b!=null && a.length >0 && a.length <51 && b.length > 0 ){
                personalMovieDB.movies[a]=b;
            } else {
                i--;
            }
            
        }
    },
    toggleVisibleMyDB: function(){
        personalMovieDB.privat=!personalMovieDB.privat; 
    },
    writeYourGenres: function(){
        const genres =[];
        for(let i =0; i<3; i++){
           genres[i]=prompt(`Ваш любимый жанр под номером ${i+1}`,'');
            if(genres[i]!= null && genres.length>0){
                personalMovieDB.gennres[i]=genres[i];
            } else {
                i--;
            }
        }
        let cnt=0;
        personalMovieDB.gennres.forEach((e)=>{
            cnt++;
            console.log(`Любимый жанр #${cnt} - это ${e}`);
        });
    },
    MyFilmRate: ()=> {
        if(personalMovieDB.count < 10 && personalMovieDB.count!=0){
        console.log(`Просмотрено довольно мало фильмов. Ви просмотрели ${personalMovieDB.count} фильмов`);
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ){
            console.log('Вы классический зритель. Ви просмотрели ${personalMovieDB.count} фильмов');
        }else if (personalMovieDB.count > 30){
            console.log('Вы киноман. Ви просмотрели ${personalMovieDB.count} фильмов');
        }else {
            console.log("Произошла ошибка");
        }

    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.MyFilmRate();
//personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB(); 
personalMovieDB.showMyDB(personalMovieDB.privat);



/* const cnt = personalMovieDB.count; */

/* function rememberMyFilms(){
    for(let i =0; i<2; i++){
        const a=prompt("Один із останніх фільміф які ви переглядали", ''),
              b=prompt("На скільки оціните його по 10-ти більній шкалі", '');
        if(a!=null && b!=null && a.length >0 && a.length <51 && b.length > 0 ){
            personalMovieDB.movies[a]=b;
        } else {
            i--;
        }
        
    }
} */

/* function MyFilmRate() {
    if(cnt < 10 && cnt!=0){
        console.log("Просмотрено довольно мало фильмов");
    } else if (cnt > 10 && cnt < 30 ){
        console.log("Вы классический зритель");
    }else if (cnt > 30){
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка");
    }
} */
/* start();
MyFilmRate();
rememberMyFilms(); */
/* showMyDB(personalMovieDB.privat); */
/* writeYourGenres(personalMovieDB.gennres); */

/* function ljs (arg, callback){
    console.log(`i love ${arg}`);
    callback();
}

function done (){
    console.log("I complete this lesson");
}
 ljs('JS', done);

const person ={
    name: 'Stas',
    soName: 'Irshenko',
    param: {
        rost: 170,
        ves: 70,
    },
};
console.log(person.soName);
let a = Object.keys(person);
console.log(a);

const {rost,ves}= person.param;
console.log(rost, ves);

let arr =[1, 2,6 ,7 ,8];
arr.push(0);
console.log(arr);

function copy (mainObj){
    let copyObj ={};
    for(let key in mainObj){
        copyObj[key]=mainObj[key];
    }
    return copyObj;
}

let obj1={
    a: 1,
    b: 2,
    c: {
        d:8,
        f: 4
    }
};
let obj2;
obj2 = copy(obj1);
obj2.a=1000;
obj1.a=19;
console.log(obj1); 
console.log(obj2);

let clone = Object.assign({}, obj1);

console.log(clone);


let arrayOld = [1, 2, 3];

let arrayNew = arrayOld.slice();

arrayNew.push(8);
console.log(arrayNew);
console.log(arrayOld);

let arrNew =[...arrayNew];

console.log(arrNew);

const q = {
    one :10,
    two :2
};

const newQ = {...q};
newQ.two=200;
console.log(newQ);
console.log(q); */