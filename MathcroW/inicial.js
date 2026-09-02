
        let slideIndex = 0;

        let slideTimer = setInterval(() => { 
            moveSlide(1);
            console.log('Passado');
        }, 4000);

        function moveSlide(passo) {
            const slides = document.querySelectorAll('.slide');
            const totalSlides = slides.length;

            slideIndex += passo;

            if (slideIndex >= totalSlides) {
                slideIndex = 0;
            }

            if (slideIndex < 0) {
                slideIndex = totalSlides - 1;
            }

            const containerSlides = document.querySelector('.carrossel-slides');
            containerSlides.style.transform = `translateX(${-slideIndex * 100}%)`;
        }

        function planoSelecionado(qual){
            sessionStorage.setItem('materia', qual);
            window.location.href = 'paginas/login.html';
        }