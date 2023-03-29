const {createApp} = Vue;
createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Colosseo1'
                },
                {
                    image: 'img/02.webp',
                    title: 'Colosseo2'
                },
                {
                    image: 'img/03.webp',
                    title: 'Colosseo3'
                },
                {
                    image: 'img/04.webp',
                    title: 'Colosseo4'
                },
                {
                    image: 'img/05.webp',
                    title: 'Colosseo5'
                },
                {
                    image: 'img/06.webp',
                    title: 'Colosseo6'
                }
            ],
            currentSlide: 0
        }
    },
    methods: {
        goNext() {
            this.currentSlide++;
            if (this.currentSlide >= this.slides.length) {
                this.currentSlide = 0;
            }
        },
        goBack() {
            this.currentSlide--;
            if (this.currentSlide < 0) {
                this.currentSlide = this.slides.length - 1;
            }
        }
    }
}).mount('#app');