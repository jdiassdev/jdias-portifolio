<template>
    <header class="bg-white border-b-4 border-black sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between gap-8">

                <RouterLink to="/" class="group flex flex-col shrink-0">
                    <p class="text-2xl font-display font-black text-black uppercase tracking-tighter leading-none">
                        <span class="text-brand-green font-mono font-bold">&lt;</span>
                        JOÃO VICTOR T. DIAS
                        <span class="text-brand-green font-mono font-bold"> /&gt;</span>
                    </p>
                    <p class="text-[8px] text-zinc-500 font-mono uppercase font-bold tracking-[0.2em] mt-1 opacity-80">
                        > Fullstack Developer // AI-Enhanced Workflow_
                    </p>
                </RouterLink>

                <nav class="hidden lg:flex items-center gap-6">
                    <ul class="flex items-center gap-2">
                        <li v-for="item in navItems" :key="item.label">
                            <RouterLink :to="item.href"
                                class="px-3 py-2 font-display font-black uppercase text-sm tracking-tight transition-all duration-100 text-black hover:bg-brand-yellow border-2 border-transparent hover:border-black">
                                {{ item.label }}
                            </RouterLink>
                        </li>
                    </ul>

                    <div class="flex items-center gap-3 ml-4 border-l-2 border-black pl-6">
                        <BaseButton variant="third" size="sm" class="flex items-center gap-2">
                            <DownloadIcon :size="16" />
                            <span>CV</span>
                        </BaseButton>

                        <BaseButton to="/contact" variant="primary" size="sm" class="flex items-center gap-2">
                            <MessageSquareText :size="16" />
                            <span>CONTATO</span>
                        </BaseButton>
                    </div>
                </nav>

                <button @click="mobileMenuOpen = !mobileMenuOpen"
                    class="lg:hidden p-2 bg-brand-yellow border-2 border-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <svg v-if="!mobileMenuOpen" class="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24"
                        stroke-width="3">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else class="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24" stroke-width="3">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Menu Mobile -->
        <div v-if="mobileMenuOpen" class="lg:hidden border-t-4 border-black bg-white">
            <ul class="flex flex-col">
                <li v-for="item in navItems" :key="item.label" class="border-b-2 border-black">
                    <RouterLink :to="item.href"
                        class="block px-6 py-4 font-display font-black uppercase text-sm tracking-tight hover:bg-brand-yellow transition-colors"
                        @click="mobileMenuOpen = false">
                        {{ item.label }}
                    </RouterLink>
                </li>
            </ul>
            <div class="flex gap-4 p-6 border-t-2 border-black">
                <BaseButton variant="third" size="sm" class="flex items-center gap-2 flex-1 justify-center">
                    <DownloadIcon :size="16" />
                    <span>CV</span>
                </BaseButton>
                <BaseButton to="/contact" variant="primary" size="sm" class="flex items-center gap-2 flex-1 justify-center"
                    @click="mobileMenuOpen = false">
                    <MessageSquareText :size="16" />
                    <span>CONTATO</span>
                </BaseButton>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '../ui/BaseButton.vue'
import { DownloadIcon, MessageSquareText } from '@lucide/vue'
import { navItems } from '@/config/nav.js'

const mobileMenuOpen = ref(false)
</script>
