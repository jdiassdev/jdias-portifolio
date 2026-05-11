<template>
    <div class="flex flex-col w-full gap-2">
        <!-- Label Component-like -->
        <label :for="id" class="font-display text-sm font-black uppercase flex items-center gap-1">
            {{ label }}
            <span v-if="required" class="text-accent-red" title="Obrigatório">*</span>
        </label>

        <input :id="id" :type="type" :value="modelValue" :placeholder="placeholder" :required="required"
            :disabled="disabled" @input="$emit('update:modelValue', $event.target.value)" :class="[
                'neo-surface px-4 py-3 font-body transition-all outline-none',
                'bg-white text-black placeholder:text-zinc-400',
                'focus:bg-zinc-50 focus:border-brand-green focus:shadow-neo-sm focus:-translate-x-0.5 focus:-translate-y-0.5',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                error ? 'border-accent-red bg-red-50' : ''
            ]" />

        <!-- Mensagem de Erro/Dica -->
        <p v-if="error" class="text-accent-red text-xs font-bold font-display uppercase italic">
            {{ error }}
        </p>
        <p v-else-if="hint" class="text-zinc-500 text-xs font-body">
            {{ hint }}
        </p>
    </div>
</template>

<script setup>
import { useId } from 'vue'

const props = defineProps({
    modelValue: [String, Number],
    label: { type: String, required: true },
    type: { type: String, default: 'text' },
    placeholder: String,
    required: Boolean,
    disabled: Boolean,
    error: String,
    hint: String
})

defineEmits(['update:modelValue'])
const id = useId()
</script>