        <footer class="d-flex flex-column flex-lg-row text-center text-lg-start justify-content-evenly">
            <!-- FIRST COLUMN -->
            <div class="flex-column col-9 m-auto col-lg-3 pt-5 pb-5">
                <div class="d-block d-lg-flex flex-row">
                    <img src="img/logowhite.svg" alt="Logo blanc" class="pb-3 pb-lg-0">
                    <p class="ms-3 brand-footer text-white ps-2">Music Band <br>
                    <span class="sub-brand-footer text-white-50">La musique au bout des doigts</span></p>
                </div>
                <div class="description-footer">
                    <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed ante sit amet mi fermentum accumsan. Nulla tristique, lorem eget accumsan efficitur, enim ipsum venenatis massa, mattis eleifend dui nibh sed sem. Vivamus nec quam turpis. Integer auctor leo at convallis malesuada. Praesent cursus feugiat ligula et tristique. Vivamus in velit nec nibh venenatis semper id eu ligula. Nullam dignissim vehicula tempor. Quisque a elementum purus. Maecenas condimentum arcu non nulla feugiat pharetra. Nunc aliquam enim augue, ultricies porta nulla maximus sed.</p>
                </div>

            </div>
            <!-- SECOND COLUMN -->
            <div class="flex-column col-12 col-md-4 pt-5 pb-5 m-auto">
                <div>
                    <p class="newsletter text-white">Inscrivez-vous à la Newsletter</p>
                </div>
                <div class="text-white-50 sign-info-footer">
                    <p>Abonnez-vous à notre newsletter et recevez les dernières mises à jour et offres.</p>
                </div>
                <div class="d-flex flex-column">
                    <form>
                        <input type="text" size="28" name="name" placeholder="Entrez votre nom" class="p-2 ps-4 mb-4"><br/>
                        <input type="email" size="28" name="mail" placeholder="Entrez votre email" class="p-2 ps-4 mb-4"><br/>
                        <button type="submit" name="sign" id="sign-footer" class="text-white">INSCRIVEZ-VOUS</button>
                    </form>
                </div>

            </div>
            <!-- THIRD COLUMN -->
            <div class="flex-column col-12 col-lg-3 pt-5 pb-5">
                <div>
                    <p class="newsletter text-white">Nous contacter</p>
                </div>
                <div class="text-white-50 sign-info-footer">
                    <p>Vous souhaitez nous contacter.<br>Plusieurs solutions s'offrent à vous.</p>
                </div>
                <div class="contact-us d-block d-lg-flex">
                    <a href="tel:+33389878586" class="pb-5 pb-lg-0"><img src="img/call.svg" alt="Icône de téléphone" class="call"></a>
                    <p class="text-white pt-3 pt-lg-0">Par téléphone au :<br>
                        <span class="phone-number">03 89 87 85 86</span></p>
                    
                </div>
                <div class="contact-us d-block d-lg-flex">
                    <a href="#" class="pb-5 pb-lg-0"><img src="img/mail.svg" alt="Icône de téléphone" class="call"></a>
                    <p class="text-white pt-3 pt-lg-0">Par email au :<br>
                        <span class="phone-number">contact[@]musicband.com</span></p>
                </div>

            </div>
        
        </footer>
        <div id="dz-root"></div>

        <script src="https://e-cdns-files.dzcdn.net/js/min/dz.js"></script>
        <script>
	    DZ.init({
		    appId  : '508702',
		    channelUrl : 'dylanc903.promo-93.codeur.online/music-band/'
	    });
</script>
        <script src="js/script.js"></script>
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
        <script>   
            if(window.innerWidth>1440) {
                let swiper = new Swiper(".mySwiper", {slidesPerView: 5.25, spaceBetween: 30, freeMode: true,});
                let swiperA = new Swiper(".mySwiperA", {slidesPerView: 6.75, spaceBetween: 30, freeMode: true,});
                }else if(window.innerWidth>1200){
                    let swiper = new Swiper(".mySwiper", {slidesPerView: 4.50, spaceBetween: 70, freeMode: true,});
                    let swiperA = new Swiper(".mySwiperA", {slidesPerView: 5.75, spaceBetween: 30, freeMode: true,});
                }else if(window.innerWidth>1000){
                    let swiper = new Swiper(".mySwiper", {slidesPerView: 3.25, spaceBetween: 30, freeMode: true,});
                    let swiperA = new Swiper(".mySwiperA", {slidesPerView: 4.75, spaceBetween: 30, freeMode: true,});
                }else if(window.innerWidth>850){
                    let swiperA = new Swiper(".mySwiperA", {slidesPerView: 4.75, spaceBetween : 30, freeMode:true,})
                
                }else if(window.innerWidth>630){
                    let swiper = new Swiper(".mySwiper", {slidesPerView: 2.50, spaceBetween: 30, freeMode: true,});
                    let swiperA = new Swiper(".mySwiperA", {slidesPerView: 3, spaceBetween: 30, freeMode: true,});
                }else if(window.innerWidth>350){
                    let swiper = new Swiper(".mySwiper", {slidesPerView: 1.40, spaceBetween: 30, freeMode: true,});
                    let swiperA = new Swiper(".mySwiperA", {slidesPerView: 1.75, spaceBetween: 30, freeMode: true,});
                }else if(window.innerWidth>250){
                    let swiper = new Swiper(".mySwiper", {slidesPerView: 2, spaceBetween: 30, freeMode: true,});
                }
    </script>
    </body>
</html>