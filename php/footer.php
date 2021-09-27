        <footer>

        </footer>

    </body>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>   
        if(window.innerWidth>1440) {
            var swiperA = new Swiper(".mySwiperA", {slidesPerView: 9.25, spaceBetween: 30, freeMode: true,});
            }else if(window.innerWidth>1200){
                var swiperA = new Swiper(".mySwiperA", {slidesPerView: 6.75, spaceBetween: 30, freeMode: true,});
            }else if(window.innerWidth>1000){
                var swiperA = new Swiper(".mySwiperA", {slidesPerView: 4.75, spaceBetween: 30, freeMode: true,});
            }else if(window.innerWidth>630){
                var swiperA = new Swiper(".mySwiperA", {slidesPerView: 3, spaceBetween: 30, freeMode: true,});
            }else if(window.innerWidth>350){
                var swiperA = new Swiper(".mySwiperA", {slidesPerView: 1.75, spaceBetween: 30, freeMode: true,});
            }
  </script>
</html>