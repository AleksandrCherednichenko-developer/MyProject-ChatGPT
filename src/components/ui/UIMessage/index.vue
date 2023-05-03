<template>
    <div
        class="message"
        :class="[props.side==='left' ? 'left-side' : 'right-side']"
    >
        <p>{{ props.text }}</p>
    </div>
</template>

<script>
export default {
    name: 'UIMessage',
};
</script>

<script setup>
const props = defineProps({
    text: { type: String, default: '' },
    side: { type: String, default: '' },
});
</script>

<style src="./styles.scss" lang="scss" scoped />
