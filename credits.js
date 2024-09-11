$(document).ready(function(){
    $(this).scrollTop(0);
});
document.addEventListener('mousemove', e => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
  


$(document).ready(function(){
    $(this).scrollTop(0);
});
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


