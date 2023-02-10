// OOPS TASK
//1.Movie Task
class Movie {
    constructor(title= '', studio = '', rating = 'PG') {
       this.title = title;
       this.studio = studio;
       this.rating = rating;
    }
 
    getPG(movies = [], rating = '') {
       return movies.filter((m) => m.rating === rating);
    }
}
const casionRoyaleMovie = new Movie('Casino Royale', 'Eon Productions', 'PG13');
const prince = new Movie('prince', 'suresh', 'PG');
const varisu = new Movie('Varisu', 'seven screen', 'PG');
const thunivu = new Movie('thunivu', 'zee', 'PG13');
const maanadu = new Movie('maanadu', 'SSI', 'PG');
const pathaan =new Movie('pathaan','aditya','R');
const lovetoday=new Movie('lovetoday','ags','R')
 
const moviesArray = [casionRoyaleMovie,prince,varisu,thunivu,maanadu,pathaan,lovetoday];
 
console.log(prince.getPG(moviesArray, 'R'));
console.log(lovetoday.getPG(moviesArray, 'PG'));


// 2.circle task
class circle{

constructor(radius=1,color='red'){
this.radius=radius;
this.color=color;
}
get getradius(){
return this.radius;
}
set setradius(x){
this.radius=x;
}
get getcolor(){
return this.radius;
}
set setcolor(y){
this.color=y;
}
 get toString(){
return `Radius: ${this.radius} Color: ${this.color} `
}
 get getarea(){
return Math.PI*this.radius*this.radius
}
 get getcircum(){
return 2*Math.PI*this.radius
}
}
const c1=new circle();
const c2=new circle(3.5,'green')
c1.setradius=2;
c1.setcolor='blue';
console.log(c1.getradius);
console.log(c1.getcolor);
console.log(c1.getarea);
console.log(c1.toString)

//3.Write a “person” class to hold all the details

class Person{
     constructor(name='',age=0,gender='',mailid='',address=[],qualification='', job='')
{
         this.name=name;
         this.age=age;
         this.gender=gender;
         this.mailid=mailid;
         this.address=address;
         this.qualification=qualification;
         this.job=job;
}
}

const person1=new Person('lal',31,'male','lal201220@gmail.com',['20 cross street', 'voc nagar', 'chennai'],'B.E','unemployee');
console.log(person1);


//4.write a class to calculate the uber price.


class ride{
 constructor(vehicle='', pickup='',drop='',kms=0,trip='',price=0,waitingtime=0)
 {
 this.vehicle=vehicle;
 this.pickup=pickup;
 this.drop=drop;
 this.kms=kms;
 this.trip=trip;
 this.price=price;
 this.waitingtime=waitingtime;
 }
 getamount(){
 if(this.trip==='oneway')
 {
 const total=this.kms*this.price;
 return total;
 }else
 {
 const total2=(this.kms*this.price)+(100*this.waitingtime);
 return total2;
 }
 }
}
const person1=new ride('auto','tambaram','airport','12','oneway','20');
const person2=new ride('4seater','egmore','guindy','15','oneway','30');
const person3=new ride('7seater','navalur','vadapalanitemple',18,'twoway','35',2);
console.log(person1.getamount());
console.log(person2.getamount());
console.log(person3.getamount());



