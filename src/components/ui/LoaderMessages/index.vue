<template>
    <div
        class="loader-message"
        :class="[props.side==='left' ? 'left-side' : 'right-side']"
    >
        <span />
        <span />
        <span />
    </div>
</template>

<script>
export default {
    name: 'LoaderMessage',
};
</script>

<script setup>
const props = defineProps({
    side: {
        type: String,
        default: 'left',
    },
});
</script>

<style src="./styles.scss" lang="scss" scoped />
