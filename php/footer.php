        <footer>

        </footer>

    </body>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>   
        if(window.innerWidth>1400) {
            var swiper = new Swiper(".mySwiper", {slidesPerView: 9.25, spaceBetween: 30, freeMode: true,});
            }else if(window.innerWidth>1000){
                var swiper = new Swiper(".mySwiper", {slidesPerView: 4.75, spaceBetween: 30, freeMode: true,});
            }else if(window.innerWidth>680){
                var swiper = new Swiper(".mySwiper", {slidesPerView: 3.75, spaceBetween: 30, freeMode: true,});
            }else if(window.innerWidth<=680){
                var swiper = new Swiper(".mySwiper", {slidesPerView: 2, spaceBetween: 30, freeMode: true,});
            }
    </script>
</html>