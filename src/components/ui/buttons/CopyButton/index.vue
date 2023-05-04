<template>
    <button class="btn copy__btn" @click.stop.prevent="copyText">
        <SvgIcon name="copy" />
    </button>
</template>

<script>
export default {
    name: 'CopyButton',
};
</script>

<script setup>
import { useClipboard } from '@vueuse/core';
import { toastSuccess } from '@/composables/toast';
import SvgIcon from '@/components/ui/SvgIcon/index.vue';

const props = defineProps({
    text: { type: String, default: '', required: true },
});

const { copy } = useClipboard();

const copyText = () => {
    copy(props.text);
    toastSuccess('copy_text');
};
</script>

<style src="./styles.scss" lang="scss" scoped />
