<template>
    <div
        class="message"
        :class="[props.side==='left' ? 'left-side' : 'right-side']"
    >
        <p v-if="props.text" class="message__text">
            {{ props.text }}
        </p>

        <div v-if="props.src" class="message__image">
            <img
                class="message__image-picture"
                :src="props.src"
                alt="OpenAI-image"
            >
        </div>

        <div class="message__control">
            <div class="message__control-btns">
                <CopyButton :text="props.text ?? props.src" />
                <FullSizeButton v-if="props.src" @click="emit('open-full-size')" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UIMessage',
};
</script>

<script setup>
import CopyButton from '@/components/ui/buttons/CopyButton/index.vue';
import FullSizeButton from '@/components/ui/buttons/FullSizeButton/index.vue';

const props = defineProps({
    text: { type: String, default: '' },
    src: { type: String, default: '' },
    side: { type: String, default: '' },
});

const emit = defineEmits(['open-full-size']);
</script>

<style src="./styles.scss" lang="scss" scoped />
