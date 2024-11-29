<template>
    <div class="slider-controls"></div>
    <div class="slider-container">
        <div class="slider">
            <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div class="slide" v-for="(slide, index) in slides" :key="index">
                    <a :href="slide.link" target="_blank">
                        <img :src="slide.image" :alt="`Slide ${index + 1}`">
                    </a>
                    <!-- Slide indicator -->
                    <div class="slider-indicator">
                        {{ currentIndex + 1 }} / {{ slides.length }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            slides: [
                { image: 'images/slide1.png', link: 'https://www.hepsiburada.com/' },
                { image: 'images/slide2.png', link: 'https://www.hepsiburada.com/' },
                { image: 'images/slide3.png', link: 'https://www.hepsiburada.com/' },
                { image: 'images/last_slide.png', link: 'https://www.hepsiburada.com/' },
            ],
        };
    },
    mounted() {
        this.startSlider();
    },
    methods: {
        startSlider() {
            setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            }, 3000); // Change slide every 3 seconds
        },
    },
};
</script>

<style scoped>
.slider-container {
    position: relative;
    width: 100%;
    max-width: 819px;
    margin: 0 auto;
    margin-left: 6%;
}

.slider {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 357px;
}

.slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    min-width: 100%;
    box-sizing: border-box;
    position: relative;
}

.slide img {
    width: 100%;
    display: block;
}

.slider-indicator {
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 14px;
    border-radius: 5px;
    font-weight: bold;
}
</style>
