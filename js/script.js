'use strict';
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
            if(genres[i]!= null && genres.length>0 && genres[i]!= ''){
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
            console.log(`Вы классический зритель. Ви просмотрели ${personalMovieDB.count} фильмов`);
        }else if (personalMovieDB.count > 30){
            console.log(`Вы киноман. Ви просмотрели ${personalMovieDB.count} фильмов`);
        }else {
            console.log("Произошла ошибка");
        }

    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.MyFilmRate();
//personalMovieDB.toggleVisibleMyDB(); 
personalMovieDB.showMyDB(personalMovieDB.privat);