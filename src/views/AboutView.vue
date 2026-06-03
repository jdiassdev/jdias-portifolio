<template>
    <section class="container mx-auto px-4 py-8 md:py-12 fade-in">
        <div class="flex items-center gap-6 mb-8">
            <div class="flex-1">
                <h1 class="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
                    / Sobre
                </h1>
                <p class="font-mono text-xs font-bold mt-2 opacity-50 uppercase tracking-widest">
                    Quem está por trás do código
                </p>
            </div>
            <img
                src="@/assets/empoleon.png"
                alt="Empoleon"
                class="w-20 md:w-28 drop-shadow-xl select-none pointer-events-none"
                draggable="false"
            />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            <!-- Bio + Princípios -->
            <div class="lg:col-span-7 flex flex-col gap-6">
                <div class="border-4 border-black p-8 bg-white shadow-neo-md">
                    <p class="font-mono text-[10px] font-black uppercase tracking-widest opacity-30 mb-6">// bio.md</p>
                    <p class="text-lg font-bold leading-relaxed mb-4">
                        Desenvolvedor Fullstack com foco em <span class="bg-brand-yellow px-1">backend robusto</span> e sistemas que funcionam em produção sem surpresas.
                    </p>
                    <p class="text-base font-bold opacity-70 leading-relaxed mb-4">
                        Trabalho principalmente com PHP/Laravel e TypeScript/Node, com experiência em Java e Spring Boot para sistemas de maior escala. Acredito que a maioria dos problemas de software são resolvidos com arquitetura clara e sem over-engineering.
                    </p>
                    <p class="text-base font-bold opacity-70 leading-relaxed">
                        Atuo com AI-enhanced workflow usando Claude Code e LLMs como multiplicadores de produtividade — não como substitutos de raciocínio técnico.
                    </p>
                </div>

                <div class="border-4 border-black p-8 bg-black text-white shadow-neo-md">
                    <p class="font-mono text-[10px] font-black uppercase tracking-widest text-brand-green mb-6">// principles.sh</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div v-for="item in principles" :key="item.title" class="border-l-4 border-brand-green pl-4">
                            <h3 class="font-black uppercase italic tracking-tighter text-sm mb-1">{{ item.title }}</h3>
                            <p class="text-xs font-bold opacity-60 leading-relaxed">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-5 flex flex-col gap-4">
                <div class="border-4 border-black p-6 bg-zinc-900 text-white shadow-neo-md">
                    <p class="font-mono text-[10px] font-black uppercase tracking-widest text-brand-green mb-4">// status</p>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                        </span>
                        <span class="font-black uppercase text-sm">Disponível</span>
                    </div>
                    <p class="text-xs font-bold opacity-60 uppercase">Belém, PA · Remoto</p>
                </div>

                <!-- Terminal -->
                <div class="border-4 border-black bg-[#0c0c0c] shadow-terminal overflow-hidden">
                    <div class="bg-white border-b-4 border-black p-3 flex justify-between items-center">
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-black border border-black"></div>
                            <div class="w-3 h-3 rounded-full bg-black opacity-20 border border-black"></div>
                            <div class="w-3 h-3 rounded-full bg-black opacity-20 border border-black"></div>
                        </div>
                        <span class="text-black font-mono text-[10px] font-black uppercase tracking-widest">
                            jdiass@fedora: ~/dev — artisan tinker
                        </span>
                        <div class="w-12"></div>
                    </div>

                    <div class="p-5 font-mono text-[11px] md:text-[12px] leading-tight">
                        <div class="space-y-1">
                            <div class="flex gap-2">
                                <span class="text-brand-green font-bold">>>></span>
                                <span class="text-white leading-relaxed">
                                    User::developer()->where(<span class="text-brand-yellow">'slug'</span>,
                                    <span class="text-brand-yellow">'jdiassdev'</span>)->additionalInfoUnnecessary();
                                </span>
                            </div>

                            <div class="mt-4">
                                <span class="text-brand-yellow">=> [</span>
                                <div class="pl-4 space-y-1 mt-1">
                                    <div><span class="text-white/60">"curso"</span> => <span class="text-brand-green">"Ciência da Computação"</span>,</div>
                                    <div><span class="text-white/60">"cor_fav"</span> => <span class="text-brand-green">"Verde Pinheiro"</span>,</div>
                                    <div><span class="text-white/60">"cor_hex"</span> => <span class="text-brand-green">"#06402B"</span>,</div>
                                    <div><span class="text-white/60">"comida"</span> => <span class="text-brand-green">"Pizza"</span>,</div>
                                    <div><span class="text-white/60">"time"</span> => <span class="text-brand-green">"Clube do Remo"</span>,</div>
                                    <div><span class="text-white/60">"jogos"</span> => <span class="text-brand-green">"The Evil Within 2, Shadow of Mordor"</span>,</div>
                                    <div><span class="text-white/60">"filme"</span> => <span class="text-brand-green">"Se7en"</span>,</div>
                                    <div><span class="text-white/60">"albums"</span> => <span class="text-brand-green">"Circles, A Arte do Insulto"</span>,</div>
                                    <div><span class="text-white/60">"musica"</span> => <span class="text-brand-green">"A7X - Gunslinger"</span>,</div>
                                    <div><span class="text-white/60">"cantor"</span> => <span class="text-brand-green">"Chorão"</span>,</div>
                                    <div><span class="text-white/60">"pokemon_fav"</span> => <span class="text-brand-green">"Empoleon"</span>,</div>
                                    <div><span class="text-white/60">"modo"</span> => <span class="text-brand-green">"Aproveitando"</span>,</div>
                                    <div><span class="text-white/60">"environment"</span> => <span class="text-brand-green">"Fedora / Ubuntu / Windows"</span>,</div>
                                </div>
                                <span class="text-brand-yellow">]</span>
                            </div>

                            <div class="flex gap-2 mt-6">
                                <span class="text-brand-green font-bold">>>></span>
                                <span class="text-white animate-pulse">_</span>
                            </div>
                        </div>

                        <div class="mt-6 opacity-40 font-mono text-[9px] uppercase tracking-widest flex justify-between items-end border-t border-white/10 pt-3">
                            <div class="space-y-1">
                                <p>Peak_Memory: 14.5MB</p>
                                <p>Execution_Time: 5ms</p>
                            </div>
                            <div class="text-right space-y-1">
                                <p>Loc: Belém, PA</p>
                                <p>TZ: UTC -3</p>
                            </div>
                        </div>
                    </div>
                </div>

                <BaseButton to="/contact" variant="secondary" size="md" block>
                    Entrar em contato
                </BaseButton>
            </div>

        </div>
    </section>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'

const principles = [
    { title: 'Testes Primeiro', desc: 'Cobertura de testes antes de qualquer refatoração — a rede de segurança para mover rápido sem quebrar.' },
    { title: 'Code Review', desc: 'Revisão de código como ferramenta de aprendizado mútuo, não como auditoria.' },
    { title: 'Tipagem Explícita', desc: 'Código sem tipo é documentação que mente para o compilador.' },
    { title: 'Entrega > Perfeição', desc: 'Software em produção imperfeito vale mais que arquitetura perfeita em planejamento.' },
]
</script>
