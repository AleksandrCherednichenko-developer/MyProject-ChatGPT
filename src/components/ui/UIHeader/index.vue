<template>
    <header class="header">
        <div class="header__inner content-container">
            <h5 class="header_h5">
                {{ $t('title') }}
            </h5>

            <BurgerButton @click-burger-button="(active)=>emit('click-burger-button', active)" />
        </div>
    </header>
</template>

<script>
export default {
    name: 'UIHeader',
};
</script>

<script setup>
import BurgerButton from '@/components/ui/buttons/BurgerButton/index.vue';

const emit = defineEmits(['click-burger-button']);
</script>

<style src="./styles.scss" lang="scss" scoped />
