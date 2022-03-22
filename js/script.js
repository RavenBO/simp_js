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
let numberOfFilms; 
function showMyDB(stat){
    if(!stat){
        console.log(personalMovieDB);
    }
}
function start (){
    numberOfFilms= +prompt('How much films do you watched ?','15');
    while(numberOfFilms ==""|| numberOfFilms==null ||isNaN(numberOfFilms)){
        numberOfFilms= +prompt('How much films do you watched ?',''); 
    }
}
function writeYourGenres (genres) {
    for(let i=0; i<3; i++){
        genres[i]=prompt(`Ваш любимый жанр под номером ${i+1}`,'');
    }
    
}
   
const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    gennres: [],
    privat : false,

};

const cnt = personalMovieDB.count;

function rememberMyFilms(){
    for(let i =0; i<2; i++){
        const a=prompt("Один із останніх фільміф які ви переглядали", ''),
              b=prompt("На скільки оціните його по 10-ти більній шкалі", '');
        if(a!=null && b!=null && a.length >0 && a.length <51 && b.length > 0 ){
            personalMovieDB.movies[a]=b;
        } else {
            i--;
        }
        
    }
}

function MyFilmRate() {
    if(cnt < 10 && cnt!=0){
        console.log("Просмотрено довольно мало фильмов");
    } else if (cnt > 10 && cnt < 30 ){
        console.log("Вы классический зритель");
    }else if (cnt > 30){
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка");
    }
}
/* start();
MyFilmRate();
rememberMyFilms(); */
showMyDB(personalMovieDB.privat);
writeYourGenres(personalMovieDB.gennres);

