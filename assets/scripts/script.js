const faqs = document.querySelectorAll(".card-faq")

faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle("ativo")
    })
})