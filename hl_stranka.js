$(function (){;
    $("#nadpis").animate({
        "margin-top":"5px"
    },750)
})
$(function(){
    $("#sec1Text").animate({
        "margin-left":"3%"
    }, 750)
})
$(function(){
    $("#sec2Text").animate({
        "margin-left":"62%"
    }, 750)
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
