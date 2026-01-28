<template>
    <div class="stats-block">
        <div class="stats-container">
        <div class="stats-text">
            <h2 class="stats-title">Каждый проект для нас — важный</h2>
            <p class="stats-description">
            Мы строительная компания полного цикла. <br><br> Вникаем во все детали, 
            разрабатываем планировку будущего дома, продумываем конструктивные 
            решения и общую архитектурную концепцию.
            </p>
        </div>
        
        <div class="stats-items">
            <div class="stat-item">
            <div class="stat-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#029F59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 22V12H15V22" stroke="#029F59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="stat-text">
                <p>57 домов</p>
                <p>спроектировали и построили "под ключ"</p>
            </div>
            </div>
            
            <div class="stat-item">
            <div class="stat-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#029F59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="#029F59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="#029F59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="#029F59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="stat-text">
                <p>14 лет</p>
                <p>мы на рынке загородного строительства</p>
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

.stats-block {
    background: white;
    padding: 80px 0px;
    
    @include m.media-breakpoint(md) {
        padding: 120px 0px;
    }
}

.stats-container {
    max-width: 1264px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    
    @include m.media-breakpoint(md) {
        flex-direction: row;
        gap: 12px;
        align-items: flex-end;
    }
}

.stats-text {
    flex: 0 0 50%;
    
    @include m.media-breakpoint(md) {
        max-width: 632px;
    }
}

.stats-title {
    @include m.text-style(var(--font-prim), 38px, 700, 1.2);
    margin: 0 0 24px 0;
    
    @include m.media-breakpoint(md) {
        font-size: 36px;
    }
}

.stats-description {
    @include m.text-style(var(--font-sec), 20px, 400, 1.35, #666666);
    margin: 0;
    opacity: 0.9;
}

.stats-items {
    flex: 0 0 50%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    
    @include m.media-breakpoint(md) {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        max-width: 632px;
    }
}

.stat-item {
    background: #F5F7F3;
    border-radius: 16px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // text-align: center;
}

.stat-icon {
    width: 24px;
    height: 24px;
    margin-bottom: 32px;
    display: flex;
    // align-items: center;
    justify-content: center;
    
    @include m.media-breakpoint(md) {
        width: 24px;
        height: 24px;
    }
}

.stat-text {
    p {
        margin: 0;
        
        &:first-child {
            @include m.text-style(var(--font-prim), 24px, 400, 1.2, #000000);
            margin-bottom: 4px;
        }
        
        &:last-child {
            @include m.text-style(var(--font-sec), 20px, 400, 1.35, #666666);
        }
    }
}
@media (max-width: 900px) {
    .stats-items {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 767px) {
    .stats-text,
    .stats-items {
        flex: 0 0 100%;
    }
    
    .stats-container {
        flex-direction: column;
        gap: 40px;
    }
    
    .stat-item {
        width: 100%;
    }
}
</style>