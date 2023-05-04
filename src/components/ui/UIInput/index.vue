<template>
    <label class="input__wrapper">
        <input
            :value="props.value"
            class="input"
            :placeholder="$t('input_placeholder')"
            @input="(ev)=>emit('input', ev.target.value.trim())"
        >
        <SvgIcon
            v-if="props.value"
            class="input__clear"
            name="close"
            @click="emit('clear-input')"
        />
    </label>
</template>

<script>
export default {
    name: 'UIInput',
};
</script>

<script setup>
import SvgIcon from '@/components/ui/SvgIcon/index.vue';

const props = defineProps({
    value: { type: String, default: '' },
});

const emit = defineEmits(['input', 'clear-input']);
</script>

<style src="./styles.scss" lang="scss" scoped />
