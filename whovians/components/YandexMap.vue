<template>
    <div ref="mapContainer" class="yandex-map"></div>
</template>

<script setup>
const props = defineProps({
    coords: { type: Array, required: true },
    zoom: { type: Number, default: 10 }
})

const mapContainer = ref(null)
const config = useRuntimeConfig()
const apiKey = config.public.yandexMapsApiKey

onMounted(() => {
    if (typeof window !== 'undefined' && !window.ymaps) {
        const script = document.createElement('script')
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`
        script.async = true
        script.onload = () => initMap()
        document.head.appendChild(script)
    } else if (window.ymaps) {
        initMap()
    }
})

function initMap() {
    ymaps.ready(() => {
        const map = new ymaps.Map(mapContainer.value, {
        center: props.coords,
        zoom: props.zoom,
        controls: []
        })

        const placemark = new ymaps.Placemark(props.coords, {
        hintContent: 'Загдом',
        balloonContent: 'г. Владивосток, ул. Выселковая 49, стр. 3'
        }, {
        preset: 'islands#greenDotIconWithCaption',
        iconColor: '#029F59'
        })

        map.geoObjects.add(placemark)
    })
}
</script>

<style scoped>
.yandex-map {
    width: 100%;
    height: 100%;
    border-radius: 8px;
}
</style>