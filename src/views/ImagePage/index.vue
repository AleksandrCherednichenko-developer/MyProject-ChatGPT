<template>
    <section class="section content-container chat__page">
        <PreviewText text="image" />

        <MessagesBlock
            :chat-messages="chatMessages"
            :loading="loading"
            type-messages="image"
            @toggle-full-size="(src)=>toggleFullSize(true, src)"
        />

        <ControlsBlock @send-message="(value)=>sendMessage(value)" />

        <BackgroundLayout :class="{'background-layout--active':activeFullSize}">
            <div class="image__full-size">
                <CloseButton @close="toggleFullSize(false)" />
                <img :src="imageSrc" alt="image">
            </div>
        </BackgroundLayout>
    </section>
</template>

<script>
export default {
    name: 'ImagePage',
};
</script>

<script setup>
import { ref } from 'vue';
import { ImageService } from '@/services/image-service';
import BackgroundLayout from '@/layout/BackgroundLayout/index.vue';
import CloseButton from '@/components/ui/buttons/CloseButton/index.vue';
import PreviewText from '@/components/ui/PreviewText/index.vue';
import MessagesBlock from '@/components/ui/MessagesBlock/index.vue';
import ControlsBlock from '@/components/ui/ControlsBlock/index.vue';

const chatMessages = ref([]);
const loading = ref(false);
const activeFullSize = ref(false);
const imageSrc = ref();

const sendMessage = async text => {
    if (!text) return;

    loading.value = true;
    chatMessages.value.push({ role: 'user', content: text });

    const resp = await ImageService.getImage(text);
    loading.value = false;

    if (resp) chatMessages.value.push({ role: 'assistant', content: resp });
};

const toggleFullSize = (value, src = null) => {
    activeFullSize.value = value;
    imageSrc.value = src ?? null;
};
</script>

<style src="./styles.scss" lang="scss" scoped />
