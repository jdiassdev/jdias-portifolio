<template>
  <span :class="[
    'neo-surface inline-flex items-center gap-1.5 px-3 py-1',
    'font-display text-xs font-bold uppercase tracking-wider',
    variantClasses[variant]
  ]" role="status">
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})

const variantClasses = {
  primary: 'bg-white text-black',
  secondary: 'bg-black text-white',
  outline: 'bg-transparent text-black border-2 border-black',
  success: 'bg-brand-green text-black',
  warning: 'bg-brand-yellow text-black',
  danger: 'bg-accent-red text-white'
}
</script>