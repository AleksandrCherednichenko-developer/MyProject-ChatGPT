<template>
    <input
        :value="props.value"
        class="input"
        :placeholder="$t('input_placeholder')"
        @input="(ev)=>emit('input', ev.target.value.trim())"
    >
</template>

<script>
export default {
    name: 'UIInput',
};
</script>

<script setup>
const props = defineProps({
    value: { type: String, default: '' },
});

const emit = defineEmits(['input']);
</script>

<style src="./styles.scss" lang="scss" scoped />
