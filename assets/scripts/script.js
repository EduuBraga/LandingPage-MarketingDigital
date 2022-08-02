const faqs = document.querySelectorAll(".card-faq")

faqs.forEach(faq =>{
    const faqPergunta = faq.querySelector(".card-faq-pergunta")
    
    faqPergunta.addEventListener('click', ()=>{
        const faqResposta = faq.querySelector(".card-faq-resposta")

        const respostaAtiva = document.querySelector(".ativo")
        verificarAtivo(faqPergunta, faqResposta, respostaAtiva)
    })
})

function verificarAtivo(faqPergunta, faqResposta, respostaAtiva){
    const imgFaq = faqPergunta.querySelector(".img-faq")
    const imgsFaq = document.querySelectorAll(".img-faq")

    imgsFaq.forEach(img =>{img.style = "transform: rotate(0deg);"})

    if(respostaAtiva){
        respostaAtiva.style = "height: 0;"
        respostaAtiva.classList.remove("ativo")
        imgFaq.style = "transform: rotate(0deg);"
    }

    if(faqResposta !== respostaAtiva){
        faqResposta.classList.add("ativo")
        faqResposta.style.height = faqResposta.scrollHeight + 10 + "px"
        imgFaq.style = "transform: rotate(180deg);"
    }
}