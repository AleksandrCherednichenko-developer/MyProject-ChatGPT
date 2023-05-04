<template>
    <button class="btn close__btn" @click="emit('close')">
        <SvgIcon name="close" class="close__btn-icon" />
    </button>
</template>

<script>
export default {
    name: 'CloseButton',
};
</script>

<script setup>
import SvgIcon from '@/components/ui/SvgIcon/index.vue';

const emit = defineEmits(['close']);
</script>

<style src="./styles.scss" lang="scss" scoped />
