<template>
    <article :class="[
        'neo-surface flex flex-col transition-all',
        interactive ? 'shadow-neo-lg neo-interactive cursor-pointer' : 'shadow-neo-md',
        variantClasses[variant]
    ]">
        <!-- Header -->
        <header v-if="$slots.header || title" class="p-5 border-b-[3px] border-black">
            <slot name="header">
                <h3 class="m-0 text-xl font-black uppercase font-display leading-tight">
                    {{ title }}
                </h3>
                <p v-if="subtitle" class="mt-1 text-sm opacity-80">{{ subtitle }}</p>
            </slot>
        </header>

        <!-- Body -->
        <main class="p-5 grow">
            <slot />
        </main>

        <!-- Footer -->
        <footer v-if="$slots.footer" class="p-5 border-t-[3px] border-black bg-zinc-50">
            <slot name="footer" />
        </footer>
    </article>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
    interactive: { type: Boolean, default: false },
    variant: {
        type: String,
        default: 'white'
    }
})

const variantClasses = {
    white: 'bg-white text-black',
    black: 'bg-black text-white border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]',
    terminal: 'bg-black text-brand-green border-brand-green shadow-terminal'
}
</script>