<script setup>
import Project from './ProjectItem.vue'

const projects = [
    {
        title: 'Заголовок проекта 1',
        description: '<p>Описание проекта 1</p>',
        image: {
        x1: '/images/projects/project_1.png',
        x2: '/images/projects/project_1@2x.png'
        }
    },
    {
        title: 'Заголовок проекта 2',
        description: '<p>Описание проекта 2</p>',
        image: {
        x1: '/images/projects/project_2.png',
        x2: '/images/projects/project_2@2x.png'
        }
    },
    // {
    //     title: 'Заголовок проекта 3',
    //     description: '<p>Описание проекта 3</p>',
    //     image: {
    //     x1: '/images/projects/project_3.png',
    //     x2: '/images/projects/project_3@2x.png'
    //     }
    // }
]
</script>

<template>
    <div class="projects">
        <h2 class="projects-title">Реализованные проекты</h2>
        <div class="projects-list">
            <Project
            v-for="(project, index) in projects"
            :key="index"
            :title="project.title"
            :description="project.description"
            :image="project.image"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

.projects {
    width: 100%;
    background-color: var(--bg-color-light);
    padding: 2rem 0;
}

.projects-list, .projects-title {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    overflow: auto;
    padding: 1rem 0;
}

@include m.media-breakpoint(md) {
    .projects-list, .projects-title {
        width: 80%;
    }
}
</style>