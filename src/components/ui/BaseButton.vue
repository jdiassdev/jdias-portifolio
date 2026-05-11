<template>
    <component :is="componentType" :[linkProp]="to" v-bind="externalProps" :type="isButton ? type : null"
        :disabled="disabled || loading" :class="[
            // 1. Estrutura Base e Bordas
            'inline-flex items-center justify-center transition-all duration-100',
            'font-display font-black uppercase tracking-tight cursor-pointer border-2 border-black',

            // 2. A Magica do Aperto (Padronizada para todos)
            'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
            'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
            'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',

            // 3. Estados de Erro/Loading
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-x-0',

            variantClasses[variant],
            sizeClasses[size],
            block ? 'w-full' : ''
        ]">
        <span v-if="loading" class="mr-2 animate-spin">⠿</span>
        <div v-else class="flex items-center gap-2">
            <slot name="icon-left" />
            <slot />
            <slot name="icon-right" />
        </div>
    </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    to: { type: [String, Object], default: null },
    variant: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
    type: { type: String, default: 'button' },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    block: { type: Boolean, default: false }
})

const externalProps = computed(() => {
    if (!isExternalLink.value) return {}
    return {
        target: '_blank',
        rel: 'noopener noreferrer'
    }
})

// Lógica para detectar se o link é externo
const isExternalLink = computed(() => {
    return typeof props.to === 'string' && props.to.startsWith('http')
})

// Define se deve ser um botão puro
const isButton = computed(() => !props.to)

// Define qual componente usar: 'a' para externo, 'router-link' para interno, 'button' para ações
const componentType = computed(() => {
    if (isButton.value) return 'button'
    return isExternalLink.value ? 'a' : 'router-link'
})

// Se for externo, o atributo deve ser 'href'. Se interno, deve ser 'to'.
const linkProp = computed(() => {
    if (isButton.value) return null
    return isExternalLink.value ? 'href' : 'to'
})

const variantClasses = {
    primary: 'bg-white text-black',
    secondary: 'bg-black text-white',
    third: 'bg-brand-green text-black',
    accent: 'bg-brand-yellow text-black',
    danger: 'bg-red-500 text-white',
    terminal: 'bg-black text-brand-green'
}

const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-xl'
}
</script>