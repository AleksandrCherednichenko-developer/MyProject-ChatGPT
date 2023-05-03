<template>
    <section class="section content-container chat-page">
        <div class="chat-page__messages">
            <template v-for="(message, i) in chatMessages" :key="i">
                <UIMessage
                    :text="message.content"
                    :side="message.role==='user' ? 'right' : 'left'"
                />
            </template>

            <LoaderMessages v-if="loading" side="left" />
        </div>

        <div class="chat-page__controls">
            <UIInput
                :value="userMessage"
                class="chat-page__controls-input"
                @input="(value)=>userMessage=value"
                @keydown.enter="sendMessage(userMessage)"
            />
            <SubmitButton
                class="chat-page__controls-button"
                @click="sendMessage(userMessage)"
            />
        </div>
    </section>
</template>

<script>
export default {
    name: 'ChatPage',
};
</script>

<script setup>
import { ref } from 'vue';
import getMessage from '@/services/chat-request';
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

    const resp = await getMessage(text);
    if (!resp.status.ok) return toastError();

    chatMessages.value.push(resp.payload.message);
    loading.value = false;
};
</script>

<style src="./styles.scss" lang="scss" scoped />
