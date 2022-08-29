const second = 1000;
const minust = second*60;
const hour = minust*60;
const day = hour*24;

function innhtm(elem,cln){
    console.log(elem);
    console.log(cln);
    document.getElementById(cln).innerText=elem;
}

function down(stp){
    const now = new Date().getTime();
    const last = new Date('August 28,2023 23:59')
    const left = last-now;
    if(left<=0){
        console.log('sv')
        clearInterval(stp);
    }

    innhtm(Math.floor((left/day)),"day");
    innhtm(Math.floor(((left%day)/hour)),'hour');
    innhtm(Math.floor(((left%hour)/minust)),'minust');
    innhtm(Math.floor(((left%minust)/second)),'second');

}

function count(){
    const stp = setInterval(() => {
        down(stp)
    },1000);
}
count();


