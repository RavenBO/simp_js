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

let numberOfFilms=+prompt('How much films do you watched ?','15');
let a =[];    
const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    gennres: [],
    privat : true,

};
console.log(personalMovieDB.count);
let i=0;
while(i<4){
    a[i]= prompt("Один із останніх фільміф які ви переглядали", '');
    i++;
    a[i] = +prompt("На скільки оціните його по 10-ти більній шкалі", ''); 
    i++;
}
/* console.log(personalMovieDB.movies.film);
console.log(personalMovieDB.movies.rate); */
let j=0;

personalMovieDB.movies[a[0]]=a[1];
personalMovieDB.movies[a[2]]=a[3];

console.log(personalMovieDB);
