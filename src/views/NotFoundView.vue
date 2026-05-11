<template>
    <section class="container mx-auto px-4 py-16 fade-in flex flex-col items-center justify-center min-h-[60vh] text-center">
        <p class="font-mono text-[10px] font-black uppercase tracking-widest opacity-30 mb-4">// error_404</p>

        <h1 class="text-[10rem] md:text-[16rem] font-black leading-none tracking-tighter italic
                   text-transparent [-webkit-text-stroke:4px_black] mb-4 select-none">
            404
        </h1>

        <p class="text-xl font-black uppercase italic tracking-tighter mb-2">Página não encontrada.</p>
        <p class="font-bold opacity-50 text-sm mb-10">O caminho que você tentou acessar não existe.</p>

        <BaseButton to="/" variant="secondary" size="lg">
            Voltar ao início
        </BaseButton>
    </section>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>
