<template>
    <div class="chat__page-preview">
        <p>{{ $t(`preview.${props.text}`) }}</p>
    </div>
</template>

<script>
export default {
    name: 'PreviewText',
};
</script>

<script setup>
const props = defineProps({
    text: { type: String, default: '' },
});
</script>

<style src="./styles.scss" lang="scss" scoped />
