<script setup>
import Project from './ProjectItem.vue'

const projects = [
    {
        title: 'Дом в скандинавском стиле',
        description: '<p>Одноэтажный дом из газобетона...</p>',
        image: {
        x1: '/images/project1_1x.jpg',
        x2: '/images/project1_2x.jpg'
        }
    },
]
</script>

<template>
    <div class="projects-list">
        <Project
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        />
    </div>
</template>

<style scoped lang="scss">
.projects-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    overflow: auto;
}
</style>