<template>
    <textarea
        ref="textarea"
        v-model="input"
        class="textarea-component"
        placeholder="What's on your mind?"
    />
</template>

<script>
export default {
    name: 'UITextareaResize',
};
</script>

<script setup>
import { useTextareaAutosize } from '@vueuse/core';

const { textarea, input } = useTextareaAutosize();
</script>

<style src="./styles.scss" lang="scss" scoped />
