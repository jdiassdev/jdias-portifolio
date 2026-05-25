<template>
    <footer class="mt-auto bg-white border-t-4 border-black font-mono">
        <div class="max-w-7xl mx-auto px-0 border-x-0 md:border-x-4 border-black">
            <div class="grid grid-cols-1 md:grid-cols-3">

                <!-- Coluna 1: Navegação -->
                <div class="p-6 border-b-4 md:border-b-0 md:border-r-4 border-black">
                    <h4 class="text-sm font-black uppercase mb-5 tracking-tighter opacity-50">
                        Navegação
                    </h4>
                    <ul class="grid grid-cols-2 gap-y-3 text-xs font-bold uppercase">
                        <li v-for="item in navItems" :key="item.label">
                            <RouterLink :to="item.href"
                                class="hover:bg-brand-green hover:text-black px-1 transition-all inline-block">
                                - {{ item.label }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <!-- Coluna 2: Social -->
                <div class="p-6 border-b-4 md:border-b-0 md:border-r-4 border-black">
                    <h4 class="text-sm font-black uppercase mb-5 tracking-tighter opacity-50">
                        Social
                    </h4>
                    <div class="grid grid-cols-2 gap-4 text-xs font-bold uppercase">
                        <a href="https://github.com/jdiassdev" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-2 transition-colors hover:text-brand-green">
                            <GitHubIcon :size="18" />
                            <span>GitHub</span>
                        </a>
                        <a href="/jdiass-cv.pdf" download="Joao-Victor-Dias-CV.pdf"
                            class="flex items-center gap-2 transition-colors hover:text-brand-green">
                            <FileTextIcon :size="18" />
                            <span>CV.pdf</span>
                        </a>
                        <a href="https://linkedin.com/in/codebydias" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-2 transition-colors hover:text-brand-green">
                            <svg viewBox="0 0 382 382" class="w-[18px] h-[18px] shrink-0" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" />
                            </svg>
                            <span>Linkedin</span>
                        </a>
                        <a href="mailto:jdiassdev@gmail.com"
                            class="flex items-center gap-2 transition-colors hover:text-brand-green">
                            <MailIcon :size="18" />
                            <span>Email</span>
                        </a>
                    </div>
                </div>

                <!-- Coluna 3: Contato -->
                <div class="p-6 flex flex-col justify-start">
                    <h4 class="text-sm font-black uppercase mb-5 tracking-tighter opacity-50">
                        Contato
                    </h4>
                    <div class="flex flex-col gap-y-3 text-xs uppercase font-bold">
                        <div class="flex items-center justify-between border-b border-black/10 pb-1">
                            <span class="opacity-50 font-medium">Whatsapp</span>
                            <a href="https://wa.me/5591985182601" target="_blank" rel="noopener noreferrer"
                                class="hover:text-brand-green transition-colors">
                                +55 91 985182601
                            </a>
                        </div>

                        <div class="flex items-center justify-between border-b border-black/10 pb-1">
                            <span class="opacity-50 font-medium">Email</span>
                            <span class="lowercase">jdiassdev@gmail.com</span>
                        </div>
                        <div class="flex items-center justify-between pb-1">
                            <span class="opacity-50 font-medium">Local</span>
                            <span>Belém, PA - BR</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Barra Inferior de Copyright -->
            <div class="border-t-4 border-black py-3 px-6 flex flex-col md:flex-row justify-between items-center gap-3 bg-white">
                <span class="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em]">
                    <InstagramIcon size="14" /> <a href="https://www.instagram.com/jdiassv/">@diassjv | 2026</a>
                </span>
                <p class="text-[10px] font-bold uppercase opacity-50 italic hidden md:block text-center">
                    "Pense levemente em si. Pense profundamente no problema." — Musashi
                </p>
                <span class="flex items-center gap-1.5 text-[10px] font-bold uppercase opacity-60">
                    Desenvolvido com <VueDotjsIcon size="14" />
                </span>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { FileTextIcon, MailIcon } from '@lucide/vue'
import { navItems } from '@/config/nav.js'
import { GitHubIcon, InstagramIcon, VueDotjsIcon } from 'vue3-simple-icons';
</script>
