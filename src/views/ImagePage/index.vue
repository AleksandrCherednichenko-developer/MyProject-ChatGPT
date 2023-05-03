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
                    :url="message.content"
                    side="left"
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
            />
            <SubmitButton
                class="controls-button"
                @click="sendMessage(userMessage)"
            />
        </div>
    </section>
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

const userMessage = ref('');
const chatMessages = ref([]);
const loading = ref(false);

const sendMessage = async text => {
    loading.value = true;
    chatMessages.value.push({ role: 'user', content: text });
    userMessage.value = '';

    const resp = await getImage(text);
    loading.value = false;

    if (!resp.status.ok) return toastError();
    chatMessages.value.push({ role: 'assistant', content: resp.payload.message });
};

</script>

<style scoped>

</style>
