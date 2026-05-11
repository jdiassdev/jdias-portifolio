<template>
    <section class="container mx-auto px-4 py-8 md:py-12 fade-in">
        <div class="flex items-center gap-4 mb-8">
            <div>
                <h1 class="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
                    / Contato
                </h1>
                <p class="font-mono text-xs font-bold mt-2 opacity-50 uppercase tracking-widest">
                    Disponível para projetos e oportunidades
                </p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <!-- Formulário -->
            <div class="lg:col-span-7">
                <div v-if="submitted" class="border-4 border-black p-8 bg-black text-white shadow-neo-lg">
                    <p class="font-mono text-brand-green font-black uppercase tracking-widest text-xs mb-4">// success</p>
                    <h2 class="text-3xl font-black uppercase italic tracking-tighter mb-4">Mensagem enviada.</h2>
                    <p class="font-bold opacity-70 mb-8">Retorno em até 48h úteis.</p>
                    <BaseButton variant="third" @click="resetForm">Nova mensagem</BaseButton>
                </div>

                <form v-else @submit="handleSubmit" class="flex flex-col gap-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <BaseInput
                            v-model="values.name"
                            label="Nome"
                            placeholder="João Silva"
                            required
                            :error="getFieldError('name')"
                            @blur="setFieldTouched('name')"
                        />
                        <BaseInput
                            v-model="values.email"
                            label="Email"
                            type="email"
                            placeholder="joao@email.com"
                            required
                            :error="getFieldError('email')"
                            @blur="setFieldTouched('email')"
                        />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="font-display text-sm font-black uppercase">
                            Mensagem <span class="text-accent-red">*</span>
                        </label>
                        <textarea
                            v-model="values.message"
                            rows="6"
                            placeholder="Descreva seu projeto ou oportunidade..."
                            class="neo-surface px-4 py-3 font-body transition-all outline-none bg-white text-black placeholder:text-zinc-400 resize-none focus:bg-zinc-50 focus:border-brand-green focus:shadow-neo-sm focus:-translate-x-0.5 focus:-translate-y-0.5"
                            @blur="setFieldTouched('message')"
                        />
                        <p v-if="getFieldError('message')" class="text-accent-red text-xs font-bold font-display uppercase italic">
                            {{ getFieldError('message') }}
                        </p>
                    </div>

                    <BaseButton type="submit" variant="secondary" size="lg" :loading="isSubmitting" class="self-start">
                        Enviar mensagem
                    </BaseButton>
                </form>
            </div>

            <!-- Sidebar de info -->
            <div class="lg:col-span-5 flex flex-col gap-4">
                <div class="border-4 border-black p-6 bg-zinc-900 text-white shadow-neo-md">
                    <p class="font-mono text-[10px] font-black uppercase tracking-widest text-brand-green mb-4">// disponibilidade</p>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                        </span>
                        <span class="font-black uppercase text-sm">Aberto a oportunidades</span>
                    </div>
                    <p class="text-xs font-bold opacity-60 uppercase">Belém, PA — Brasil · Remoto</p>
                </div>

                <div class="border-4 border-black p-6 bg-white shadow-neo-md">
                    <p class="font-mono text-[10px] font-black uppercase tracking-widest opacity-50 mb-4">// canais diretos</p>
                    <div class="flex flex-col gap-3 text-sm font-bold">
                        <a href="mailto:jdiassdev@gmail.com"
                            class="flex items-center justify-between border-b-2 border-black/10 pb-3 hover:text-brand-green transition-colors">
                            <span class="uppercase opacity-50 text-xs">Email</span>
                            <span>jdiassdev@gmail.com</span>
                        </a>
                        <a href="https://linkedin.com/in/codebydias" target="_blank" rel="noopener noreferrer"
                            class="flex items-center justify-between border-b-2 border-black/10 pb-3 hover:text-brand-green transition-colors">
                            <span class="uppercase opacity-50 text-xs">LinkedIn</span>
                            <span>codebydias</span>
                        </a>
                        <a href="https://github.com/jdiassdev" target="_blank" rel="noopener noreferrer"
                            class="flex items-center justify-between hover:text-brand-green transition-colors">
                            <span class="uppercase opacity-50 text-xs">GitHub</span>
                            <span>jdiassdev</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useForm } from '@/composables/useForm.js'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const submitted = ref(false)

const { values, isSubmitting, handleSubmit, getFieldError, setFieldTouched, reset } = useForm({
    initialValues: { name: '', email: '', message: '' },
    validate(v) {
        const errors = {}
        if (!v.name.trim()) errors.name = 'Nome obrigatório'
        if (!v.email.trim()) errors.email = 'Email obrigatório'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errors.email = 'Email inválido'
        if (!v.message.trim()) errors.message = 'Mensagem obrigatória'
        else if (v.message.trim().length < 10) errors.message = 'Mínimo de 10 caracteres'
        return errors
    },
    async onSubmit(values) {
        const mailto = `mailto:jdiassdev@gmail.com?subject=Contato via Portfólio — ${encodeURIComponent(values.name)}&body=${encodeURIComponent(`Nome: ${values.name}\nEmail: ${values.email}\n\n${values.message}`)}`
        window.location.href = mailto
        submitted.value = true
    }
})

function resetForm() {
    reset()
    submitted.value = false
}
</script>
