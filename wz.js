//this is for when we  see the element then it will show up
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });

});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const observer1 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show1');
        }else{
            entry.target.classList.remove('show1');
        }
    });

});

const hiddenElements1=document.querySelectorAll('.hidden1');
hiddenElements1.forEach((el) => observer1.observe(el));


const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show2');
        }else{
            entry.target.classList.remove('show2');
        }
    });

});

const hiddenElements2=document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show3');
        }else{
            entry.target.classList.remove('show3');
        }
    });

});

const hiddenElements3=document.querySelectorAll('.hidden3');
hiddenElements3.forEach((el) => observer3.observe(el));



const observer4 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show4');
        }else{
            entry.target.classList.remove('show4');
        }
    });

});

const hiddenElements4=document.querySelectorAll('.hidden4');
hiddenElements4.forEach((el) => observer4.observe(el));

const observer5 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show5');
        }else{
            entry.target.classList.remove('show5');
        }
    });

});

const hiddenElements5=document.querySelectorAll('.hidden5');
hiddenElements5.forEach((el) => observer5.observe(el));

//script for cursor
document.addEventListener('mousemove', e => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
  


$(document).ready(function(){
    $(this).scrollTop(0);
});





















