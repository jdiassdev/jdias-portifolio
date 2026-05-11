<template>
    <section class="container mx-auto px-4 py-8 md:py-12 fade-in">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div class="lg:col-span-8">

                <BaseBadge variant="outline"
                    class="mb-6 flex items-center gap-2 bg-black text-black py-1 px-3 border-none">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                    </span>
                    Kaizen
                </BaseBadge>

                <h1
                    class="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] mb-8 italic tracking-tighter">
                    Projetando <br />
                    <span class="bg-brand-yellow text-black px-3 ml-2 inline-block shadow-neo-sm">Soluções</span><br />
                    Eficientes.
                </h1>

                <p
                    class="text-lg md:text-xl font-bold mb-10 max-w-xl border-l-4 md:border-l-8 border-black pl-6 py-1 leading-snug">
                    Desenvolvedor Fullstack focado em transformar requisitos em sistemas estáveis.
                    <span class="opacity-60 text-base md:text-lg block mt-2">
                        Aplicando simplicidade técnica para resolver problemas reais de negócio.
                    </span>
                </p>


                <div class="flex flex-wrap gap-4 md:gap-6">
                    <BaseButton to="/projects" variant="third" size="lg">
                        Explorar Projetos
                        <ArrowRight />
                    </BaseButton>

                    <BaseButton to="/contact" variant="primary" size="lg">
                        Contato
                    </BaseButton>
                </div>
            </div>


            <div class="hidden lg:block lg:col-span-4">
                <BaseCard variant="terminal"
                    class="rotate-1 hover:rotate-0 transition-transform duration-300 border-2 border-white/10 bg-black shadow-terminal overflow-hidden">

                    <div class="bg-[#1a1a1a] border-b border-white/10 px-4 py-2.5 flex justify-between items-center">
                        <div class="flex gap-1.5">
                            <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                            <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                            <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                        </div>
                        <span class="font-mono text-[10px] text-white/40 tracking-wider">netlify deploy --prod</span>
                        <div class="w-16"></div>
                    </div>

                    <pre class="px-5 py-4 font-mono text-[10px] leading-[1.9] text-white/90 overflow-hidden"
><span class="text-brand-green">~/portfolio</span> <span class="text-white/50">$</span> netlify deploy --prod

<span class="text-cyan-400">▲ Netlify</span> <span class="text-white/40">· jdias-portfolio</span>

<span class="text-brand-green">●</span> <span class="text-white/70">Build</span> <span class="text-white/20">.........</span> <span class="text-white">2.8s</span>
<span class="text-brand-green">●</span> <span class="text-white/70">Vite bundle</span> <span class="text-white/20">....</span> <span class="text-white">done</span>
<span class="text-brand-green">●</span> <span class="text-white/70">Gzip ratio</span> <span class="text-white/20">.....</span> <span class="text-white">-68%</span>
<span class="text-brand-green">●</span> <span class="text-white/70">Upload</span> <span class="text-white/20">.........</span> <span class="text-white">23 files</span>
<span class="text-cyan-400">●</span> <span class="text-white/70">CDN edge</span> <span class="text-white/20">.......</span> <span class="text-white">global</span>

<span class="text-white/40">Site:</span> <span class="text-brand-yellow">jdiassdev.netlify.app</span>
<span class="text-white/40">ID:</span>   <span class="text-white/60">e7a1c3f</span>

<span class="text-brand-green">✓</span> <span class="text-white">Deploy live in</span> <span class="text-orange-300">11.2s</span>

<span class="text-brand-green">~/portfolio</span> <span class="text-white/50">$</span> <span class="animate-pulse">▊</span></pre>
                </BaseCard>
            </div>

        </div>
    </section>
</template>

<script setup>
import BaseButton from '../components/ui/BaseButton.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import BaseBadge from '../components/ui/BaseBadge.vue'
import { ArrowRight } from '@lucide/vue';
</script>