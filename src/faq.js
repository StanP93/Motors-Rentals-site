const vector = document.querySelectorAll('.vector');

for(let el of vector) {
    el.addEventListener('click', function(e) {
        if(el.previousElementSibling.classList == 'faq-text-none'){
            el.previousElementSibling.classList.remove('faq-text-none');
            el.previousElementSibling.classList.add('faq-text-block');
            el.style.transform = 'rotate(0deg)';
        } else if(el.previousElementSibling.classList == 'faq-text-block') {
            el.previousElementSibling.classList.remove('faq-text-block');
            el.previousElementSibling.classList.add('faq-text-none');
            el.style.transform = 'rotate(180deg)';
        }
        console.log(e);
    })
}
