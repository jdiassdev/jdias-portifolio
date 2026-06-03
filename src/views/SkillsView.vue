<template>
    <section class="max-w-[1400px] mx-auto px-4 py-8 fade-in font-sans text-black">
        <div class="flex items-center justify-between mb-6 pb-2">
            <h2 class="text-3xl font-black uppercase italic tracking-tighter">/ Habilidades</h2>
            <img
                src="@/assets/palkia.png"
                alt="Palkia"
                class="w-16 md:w-20 drop-shadow-xl select-none pointer-events-none"
                width="80" height="80"
                decoding="async"
                fetchpriority="high"
                draggable="false"
            />
            <div class="flex gap-4 font-mono text-[10px] uppercase font-bold opacity-40">
                <span>Stack: Fullstack/Backend</span>
                <span class="text-brand-green">● System_Online</span>
            </div>
        </div>

        <div class="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">

            <div class="break-inside-avoid border-4 border-black p-6 bg-white shadow-neo-sm">
                <h3 class="text-[10px] font-mono font-black uppercase tracking-widest opacity-30 mb-6">01.
                    Main_Languages</h3>
                <div class="space-y-6">
                    <div v-for="lang in mainLangs" :key="lang.name" class="group">
                        <div class="flex items-center gap-3 mb-2 border-b-2 border-black/5 pb-1">
                            <component :is="lang.icon" :style="{ fill: lang.color }" class="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            <span class="text-xl font-black uppercase italic tracking-tighter">{{ lang.name }}</span>
                        </div>
                        <p class="text-[11px] font-bold opacity-60 leading-tight">{{ lang.desc }}</p>
                    </div>
                </div>
            </div>

            <div class="break-inside-avoid border-4 border-black p-6 bg-zinc-50 shadow-neo-sm">
                <h3 class="text-[10px] font-mono font-black uppercase tracking-widest opacity-30 mb-6">02.
                    Frameworks_Lib</h3>
                <div class="flex flex-wrap gap-3 mb-6">
                    <div v-for="fw in frameworks" :key="fw.name"
                        class="flex items-center gap-2 border-2 border-black px-3 py-1 bg-white cursor-pointer transition-all duration-75 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        <component :is="fw.icon" :style="{ fill: fw.color }" class="w-4 h-4" />
                        <span class="text-xs font-black uppercase italic">{{ fw.name }}</span>
                    </div>
                </div>
                <div class="bg-black text-white p-3 italic">
                    <p class="text-[12px] font-bold">"Ferramenta certa para o problema certo. Sem mais."</p>
                </div>
            </div>

            <div class="break-inside-avoid border-4 border-black p-6 bg-white shadow-neo-sm">
                <h3 class="text-[10px] font-mono font-black uppercase tracking-widest opacity-30 mb-6">03. Workflow</h3>
                <div class="space-y-6">
                    <div v-for="tool in workflow" :key="tool.title" class="space-y-2">
                        <div class="flex items-center gap-2">
                            <component :is="tool.icon" :style="{ fill: tool.color }" class="w-5 h-5" />
                            <h4 class="text-lg font-black uppercase italic leading-none tracking-tighter">{{ tool.title }}</h4>
                        </div>
                        <p class="text-[11px] font-bold opacity-60 uppercase">{{ tool.content }}</p>
                    </div>
                </div>
            </div>

            <div
                class="break-inside-avoid border-4 border-black p-6 bg-black text-white shadow-neo-sm flex flex-col justify-between">
                <div>
                    <h3 class="text-[10px] font-mono font-black uppercase text-brand-green mb-6">/ Standards.sh</h3>
                    <ul class="space-y-3">
                        <li v-for="p in principles" :key="p" class="flex items-start gap-2">
                            <span class="text-brand-green font-black mt-0.5">>></span>
                            <span class="text-sm font-black uppercase italic tracking-tight leading-tight">{{ p }}</span>
                        </li>
                    </ul>
                </div>
                <div
                    class="mt-8 flex justify-between items-center font-mono text-[9px] opacity-50 uppercase border-t border-white/20 pt-4">
                    <span>Env: WSL2/Linux</span>
                    <span>Build: 1.0.2</span>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import {
    PhpIcon, TypeScriptIcon, OpenJdkIcon, PostgreSqlIcon, DockerIcon,
    LaravelIcon, NestJsIcon, SpringBootIcon, FastifyIcon, NextDotjsIcon,
    ReactIcon, RedisIcon, NodeDotjsIcon,
    AnthropicIcon, LinuxIcon, DiagramsDotnetIcon
} from 'vue3-simple-icons'

const mainLangs = [
    { name: 'PHP', icon: PhpIcon, color: '#777BB4', desc: 'Desenvolvimento de ecossistemas resilientes com foco em performance e segurança.' },
    { name: 'TypeScript', icon: TypeScriptIcon, color: '#3178C6', desc: 'Arquiteturas escaláveis com tipagem estrita end-to-end.' },
    { name: 'Java', icon: OpenJdkIcon, color: '#ED8B00', desc: 'Construção de aplicações robustas seguindo padrões SOLID.' },
    { name: 'Postgres', icon: PostgreSqlIcon, color: '#4169E1', desc: 'Modelagem relacional, estratégias de indexação e queries otimizadas para alta performance.' },
    { name: 'Docker', icon: DockerIcon, color: '#2496ED', desc: 'Orquestração de ambientes e otimização de pipelines CI/CD.' }
]

const frameworks = [
    { name: 'Laravel', icon: LaravelIcon, color: '#FF2D20' },
    { name: 'NestJS', icon: NestJsIcon, color: '#E0234E' },
    { name: 'Spring Boot', icon: SpringBootIcon, color: '#6DB33F' },
    { name: 'Fastify', icon: FastifyIcon, color: '#000000' },
    { name: 'Next.js', icon: NextDotjsIcon, color: '#000000' },
    { name: 'React', icon: ReactIcon, color: '#61DAFB' },
    { name: 'Redis', icon: RedisIcon, color: '#DC382D' },
    { name: 'Node.js', icon: NodeDotjsIcon, color: '#339933' }
]

const workflow = [
    { title: 'IA & Productivity', icon: AnthropicIcon, color: '#191919', content: 'Workflow otimizado com Claude Code e LLMs para acelerar a entrega.' },
    { title: 'Infrastructure', icon: LinuxIcon, color: '#FCC624', content: 'Domínio de ambientes WSL2/Linux para paridade total com produção.' },
    { title: 'Architecture', icon: DiagramsDotnetIcon, color: '#F08705', content: 'Design de sistemas com escopo adequado ao problema real, sem over-engineering prematuro.' }
]

const principles = [
    'Entrega Incremental: ship pequeno, melhore constante',
    'Documentação via Código: nomes que explicam, commits que narram',
    'Code Review como Aprendizado, não Auditoria',
    'DRY Equilibrado e Código Copiável',
    'Tipagem Obrigatória e Explícita',
    'Tratamento de Erros com Contexto'
]
</script>
