<template>
    <div class="reklam-container">
        <div class="reklam-item" v-for="(reklam, index) in reklams" :key="index">
            <a :href="reklam.link" target="_blank">
                <img :src="reklam.image" :alt="'Reklam ' + (index + 1)" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Reklam',
    data() {
        return {
            reklams: [
                { image: 'Reklam/image.png', link: 'https://www.hepsiburada.com/efsane-kasim?trackingId=11027127' },
                { image: 'Reklam/image2.png', link: 'https://www.hepsiburada.com/kampanyalar/secili-bilgisayar-urunlerinde-sepette-5-indirim?trackingId=11001758' },
                { image: 'Reklam/image3.png', link: 'https://www.hepsiburada.com/dv/efsane-kupon?tabId=1978&trackingId=11025450' }
            ]
        };
    }
};
</script>

<style scoped>
.reklam-container {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
}

.reklam-item {
    margin: 10px;
}

.reklam-item img {
    width: 424px;
    height: 185px;
    display: flex;
}
</style>