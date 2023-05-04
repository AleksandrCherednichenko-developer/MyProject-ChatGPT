<template>
    <div
        class="message"
        :class="[props.side==='left' ? 'left-side' : 'right-side']"
    >
        <p
            v-if="props.text"
            class="message__text"
        >
            {{ props.text }}
        </p>
        <div
            v-if="props.src"
            class="message__image"
        >
            <img
                class="message__image-picture"
                :src="props.src"
                alt="OpenAI-image"
            >
            <SvgIcon
                name="full-size-image"
                class="message__image-full-size"
                @click="qwe"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'UIMessage',
};
</script>

<script setup>
import SvgIcon from '@/components/ui/SvgIcon/index.vue';

const props = defineProps({
    text: { type: String, default: '' },
    src: { type: String, default: '' },
    side: { type: String, default: '' },
});

const emit = defineEmits(['open-full-size']);

const qwe = () => {
    console.log(123);
    emit('open-full-size');
};
</script>

<style src="./styles.scss" lang="scss" scoped />
