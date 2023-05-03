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
            v-if="props.url"
            class="message__image"
        >
            <img
                class="message__image-picture"
                :src="props.url"
                alt="OpenAI-image"
            >
            <SvgIcon
                name="full-size-image"
                class="message__image-full-size"
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
    url: { type: String, default: '' },
    side: { type: String, default: '' },
});
</script>

<style src="./styles.scss" lang="scss" scoped />
