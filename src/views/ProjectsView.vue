<template>
    <section class="container mx-auto px-4 py-8 md:py-12 fade-in">
        <div class="flex items-center gap-4 mb-8 relative overflow-hidden">
            <div class="flex-1">
                <h2 class="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
                    / Projetos
                </h2>
                <p class="font-mono text-xs font-bold mt-2 opacity-50 uppercase tracking-widest">
                    Exploração Técnica: Da Prova de Conceito à Produção
                </p>
            </div>
            <img
                src="@/assets/urshifu.png"
                alt="Urshifu"
                class="w-20 md:w-28 drop-shadow-xl select-none pointer-events-none"
                draggable="false"
            />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <BaseCard v-for="project in projects" :key="project.title" :class="[
                'flex flex-col h-full p-8 transition-all duration-200',
                'hover:translate-x-1 hover:translate-y-1 hover:shadow-none border-4',
                project.hoverColor
            ]">
                <div class="flex justify-between items-start mb-6">
                    <h3 class="text-2xl font-black uppercase leading-none">{{ project.title }}</h3>
                    <BaseBadge :variant="project.categoryVariant" :class="project.categoryClasses">
                        {{ project.category }}
                    </BaseBadge>
                </div>

                <p class="font-bold text-sm mb-8 opacity-80 grow leading-relaxed" v-html="project.description"></p>

                <div class="flex flex-wrap gap-2 mb-8">
                    <BaseBadge v-for="tag in project.tags" :key="tag" variant="outline"
                        class="text-[10px] bg-gray-50 border-2">
                        {{ tag }}
                    </BaseBadge>
                </div>

                <BaseButton :to="project.link" :variant="project.buttonVariant" block size="sm">
                    {{ project.buttonText }} <ArrowRight/>
                </BaseButton>
            </BaseCard>
        </div>

        <div class="mt-10 flex justify-center">
            <BaseButton :to="githubUrl" variant="primary" size="lg" class="px-12 py-5 text-xl">
                Ver Todos os Repositórios <ArrowRight/>
            </BaseButton>
        </div>
    </section>
</template>

<script setup>
import BaseBadge from '@/components/ui/BaseBadge.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import { ArrowRight } from '@lucide/vue';

const githubUrl = import.meta.env.VITE_GITHUB_URL;

const projects = [
    {
        title: 'Casa Amarela',
        category: 'Commercial',
        categoryVariant: 'secondary',
        categoryClasses: 'bg-black text-white border-none text-[9px]',
        description: 'Plataforma de reservas real-time. Foco em <span class="bg-brand-yellow/30 px-1">performance de carregamento</span> e simplicidade na gestão de datas.',
        tags: ['Next.js 15', 'Prisma', 'PostgreSQL'],
        link: 'https://casaamarela-six.vercel.app/',
        buttonVariant: 'primary',
        buttonText: 'Explorar Case',
        hoverColor: 'shadow-[12px_12px_0px_0px_#FFFF00]'
    },
    {
        title: 'ThatsMyTypes',
        category: 'Open Source',
        categoryVariant: 'primary',
        categoryClasses: 'bg-brand-green text-black border-2 border-black text-[9px]',
        description: 'Biblioteca para sincronizar FormRequests Laravel com interfaces TypeScript automaticamente via CLI.',
        tags: ['PHP 8.2', 'Laravel', 'TS'],
        link: 'https://github.com/jdiassdev/laravel-types-gen',
        buttonVariant: 'third',
        buttonText: 'Ver no GitHub',
        hoverColor: 'shadow-[12px_12px_0px_0px_#00FF00]'
    },
    {
        title: 'Gentleman API',
        category: 'Backend',
        categoryVariant: 'primary',
        categoryClasses: 'bg-brand-yellow text-black border-2 border-black text-[9px]',
        description: 'API RESTful para gestão de barbearias utilizando <span class="underline decoration-black decoration-2">ULIDs</span> e ambiente Dockerizado.',
        tags: ['Laravel', 'Docker', 'MySQL'],
        link: 'https://github.com/jdiassdev/api-gbarber',
        buttonVariant: 'accent',
        buttonText: 'Explorar Docs',
        hoverColor: 'shadow-[12px_12px_0px_0px_#FFFF00]'
    }
]
</script>