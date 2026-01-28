<template>
    <div class="stats-section">
        <div class="stats-container">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">57</div>
                        <div class="stat-text">
                            <p>домов спроектировали</p>
                            <p>и построили "под ключ"</p>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">14</div>
                        <div class="stat-text">
                            <p>лет мы на рынке</p>
                            <p>загородного строительства</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

.stats-section {
    background: white;
    padding: 80px 144px;
    
    @include m.media-breakpoint(md) {
        padding: 40px 24px;
    }
}

.stats-container {
    max-width: 1264px;
    margin: 0 auto;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;
    
    @include m.media-breakpoint(md) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 24px;
}

.stat-number {
    @include m.text-style(var(--font-prim), 64px, 700, 1, #029F59);
    min-width: 120px;
    
    @include m.media-breakpoint(md) {
        font-size: 48px;
        min-width: 80px;
    }
}

.stat-text {
    @include m.text-style(var(--font-sec), 16px, 400, 1.4, #254741);
    
    p {
        margin: 0;
        
        &:first-child {
        margin-bottom: 4px;
        }
    }
}
</style>