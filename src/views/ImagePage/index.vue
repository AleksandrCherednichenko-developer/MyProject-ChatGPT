<template>
    <section class="section content-container dialogue-page">
        <div class="preview">
            <p>{{ $t('preview.image') }}</p>
        </div>

        <div class="messages">
            <template v-for="(message, i) in chatMessages" :key="i">
                <UIMessage
                    v-if="message.role==='user'"
                    :text="message.content"
                    side="right"
                />
                <UIMessage
                    v-else
                    :src="message.content"
                    side="left"
                    @open-full-size="toggleFullSize(true, message.content)"
                />
            </template>

            <LoaderMessages v-if="loading" side="left" />
        </div>

        <div class="controls">
            <UIInput
                :value="userMessage"
                class="controls-input"
                @input="(value)=>userMessage=value"
                @keydown.enter="sendMessage(userMessage)"
                @clear-input="userMessage=''"
            />
            <SubmitButton
                class="controls-button"
                @click="sendMessage(userMessage)"
            />
        </div>
    </section>

    <BackgroundLayout :class="{'background-layout--active':activeFullSize}">
        <div class="image__full-size">
            <CloseButton @close="toggleFullSize(false)" />
            <img :src="imageSrc" alt="image">
        </div>
    </BackgroundLayout>
</template>

<script>
export default {
    name: 'ImagePage',
};
</script>

<script setup>
import { ref } from 'vue';
import getImage from '@/services/image-request';
import { toastError, toastSuccess } from '@/composables/toast';
import SubmitButton from '@/components/ui/buttons/SubmitButton/index.vue';
import UIInput from '@/components/ui/UIInput/index.vue';
import LoaderMessages from '@/components/ui/LoaderMessages/index.vue';
import UIMessage from '@/components/ui/UIMessage/index.vue';
import BackgroundLayout from '@/layout/BackgroundLayout/index.vue';
import CloseButton from '@/components/ui/buttons/CloseButton/index.vue';

const userMessage = ref('');
const chatMessages = ref([]);
const loading = ref(false);
const activeFullSize = ref(false);
const imageSrc = ref();

const sendMessage = async text => {
    loading.value = true;
    chatMessages.value.push({ role: 'user', content: text });
    userMessage.value = '';

    const resp = await getImage(text);
    loading.value = false;

    if (!resp.status.ok) return toastError();
    chatMessages.value.push({ role: 'assistant', content: resp.payload.message });
};

const toggleFullSize = (value, src = null) => {
    activeFullSize.value = value;
    if (!src) return;
    imageSrc.value = src;
};

</script>

<style src="./styles.scss" lang="scss" scoped />
