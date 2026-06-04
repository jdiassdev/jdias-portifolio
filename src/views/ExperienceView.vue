<template>
    <section class="container mx-auto px-4 py-8 md:py-12 fade-in">
        <div class="flex items-center gap-6 mb-8">
            <div class="flex-1">
                <h1 class="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
                    / Experiências
                </h1>
                <p class="font-mono text-xs font-bold mt-2 opacity-50 uppercase tracking-widest">
                    Histórico profissional e contribuições
                </p>
            </div>
            <img
                src="@/assets/swampert.png"
                alt="Swampert"
                class="w-20 md:w-28 drop-shadow-xl select-none pointer-events-none"
                width="112" height="112"
                decoding="async"
                fetchpriority="high"
                draggable="false"
            />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            <!-- Timeline -->
            <div class="lg:col-span-8 flex flex-col gap-6">
                <div v-for="(exp, index) in experiences" :key="exp.company" class="relative">
                    <!-- Connector -->
                    <div v-if="index < experiences.length - 1"
                        class="absolute left-7 top-full w-0.5 h-6 bg-black z-10">
                    </div>

                    <div class="border-4 border-black bg-white shadow-neo-md">
                        <!-- Header da experiência -->
                        <div class="border-b-4 border-black p-6 flex items-start justify-between gap-4">
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-brand-yellow border-4 border-black flex items-center justify-center shrink-0 font-black text-sm">
                                    {{ String(index + 1).padStart(2, '0') }}
                                </div>
                                <div>
                                    <h2 class="text-xl font-black uppercase italic tracking-tighter leading-tight">
                                        {{ exp.role }}
                                    </h2>
                                    <p class="font-black text-base mt-0.5">{{ exp.company }}</p>
                                </div>
                            </div>
                            <div class="text-right shrink-0">
                                <span class="font-mono text-[10px] font-black uppercase tracking-widest opacity-50 block">
                                    {{ exp.period }}
                                </span>
                                <span class="inline-block mt-1 px-2 py-0.5 border-2 border-black font-mono text-[9px] font-black uppercase tracking-widest"
                                    :class="exp.current ? 'bg-brand-green text-white' : 'bg-zinc-100'">
                                    {{ exp.current ? 'Atual' : 'Concluído' }}
                                </span>
                            </div>
                        </div>

                        <!-- Contribuições -->
                        <div class="p-6">
                            <p class="font-mono text-[10px] font-black uppercase tracking-widest opacity-30 mb-4">
                                // contribuições
                            </p>
                            <div class="space-y-4">
                                <div v-for="item in exp.contributions" :key="item.title"
                                    class="border-l-4 border-brand-green pl-4">
                                    <h3 class="font-black uppercase italic tracking-tighter text-sm mb-1">
                                        {{ item.title }}
                                    </h3>
                                    <p class="text-xs font-bold opacity-60 leading-relaxed">{{ item.desc }}</p>
                                </div>
                            </div>

                            <!-- Stack usada -->
                            <div class="mt-6 pt-4 border-t-2 border-black/10 flex flex-wrap gap-2">
                                <span v-for="tech in exp.stack" :key="tech"
                                    class="px-2 py-0.5 border-2 border-black font-mono text-[9px] font-black uppercase tracking-widest bg-zinc-100">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-24">

                <!-- Formação -->
                <div class="border-4 border-black bg-white shadow-neo-md p-6">
                    <p class="font-mono text-[10px] font-black uppercase tracking-widest opacity-30 mb-4">
                        // formação
                    </p>
                    <div class="space-y-4">
                        <div v-for="edu in education" :key="edu.course" class="border-l-4 border-black pl-4">
                            <h3 class="font-black uppercase italic tracking-tighter text-sm leading-tight">
                                {{ edu.course }}
                            </h3>
                            <p class="font-bold text-xs opacity-50 mt-1">{{ edu.institution }}</p>
                            <p class="font-mono text-[9px] uppercase font-bold opacity-30 mt-0.5">{{ edu.period }}</p>
                        </div>
                    </div>
                </div>

                <!-- Idiomas -->
                <div class="border-4 border-black bg-zinc-900 text-white shadow-neo-md p-6">
                    <p class="font-mono text-[10px] font-black uppercase tracking-widest text-brand-green mb-4">
                        // idiomas
                    </p>
                    <div class="space-y-3">
                        <div v-for="lang in languages" :key="lang.name" class="flex items-center justify-between">
                            <span class="font-black uppercase italic tracking-tighter text-sm">{{ lang.name }}</span>
                            <span class="font-mono text-[9px] font-black uppercase tracking-widest opacity-50">
                                {{ lang.level }}
                            </span>
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

const experiences = [

    {
        role: 'Desenvolvedor Web Fullstack',
        company: 'Criativa Tecnologia',
        period: 'Ago 2024 – Maio 2026',
        type: 'Estágio',
        modality: 'Presencial',
        location: 'Belém, PA',
        current: false,
        stack: ['PHP', 'Laravel', 'MySQL', 'Redis', 'React.js', 'TypeScript', 'Tailwind CSS'],
        contributions: [
            {
                title: 'Otimização de Sistemas Administrativos',
                desc: 'Construção, adaptação e melhoria de sistemas internos com implementação de controle de permissões granular por página, reduzindo o tempo de manutenção e aumentando a segurança de acesso.',
            },
            {
                title: 'Modelagem e Performance de Dados',
                desc: 'Design de estruturas de banco de dados, normalização e desenvolvimento de Views e Triggers para automação de integridade referencial, melhorando a consistência dos dados em produção.',
            },
            {
                title: 'Sincronização e Caching',
                desc: 'Desenvolvimento de fluxos de sincronização entre serviços web e máquinas locais (on-premise), com implementação de camadas de cache Redis em endpoints críticos, reduzindo a latência de leitura em 60%.',
            },
        ],
    },
]

const lookingFor = [
    { label: 'Modalidade', value: 'Remoto ou Híbrido' },
    { label: 'Contrato', value: 'CLT ou PJ' },
    { label: 'Stack', value: 'PHP / Laravel · Node.js · TypeScript' },
    { label: 'Foco', value: 'Backend · Fullstack' },
    { label: 'Empresa', value: 'Produto próprio ou consultoria técnica' },
]

const education = [
    {
        course: 'Ciência da Computação',
        institution: 'UNAMA',
        period: 'Em formação',
    },
]

const languages = [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Intermediário (leitura técnica e conversação)' },
]
</script>
