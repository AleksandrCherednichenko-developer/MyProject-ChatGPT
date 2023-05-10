<template>
    <section class="section content-container chat__page">
        <PreviewText text="chat" />

        <MessagesBlock :chat-messages="chatMessages" :loading="loading" />

        <div class="chat__page-controls">
            <UIInput
                :value="userMessage"
                class="chat__page-controls-input"
                @input="(value)=>userMessage=value"
                @keydown.enter="sendMessage(userMessage)"
                @clear-input="userMessage=''"
            />
            <SubmitButton
                class="chat__page-controls-button"
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
import { ChatService } from '@/services/chat-service';
import SubmitButton from '@/components/ui/buttons/SubmitButton/index.vue';
import UIInput from '@/components/ui/UIInput/index.vue';
import MessagesBlock from '@/components/ui/MessagesBlock/index.vue';
import PreviewText from '@/components/ui/PreviewText/index.vue';

const userMessage = ref('');
const chatMessages = ref([]);
const loading = ref(false);

const sendMessage = async text => {
    if (!text || loading.value) return;

    loading.value = true;
    chatMessages.value.push({ role: 'user', content: text });
    userMessage.value = '';

    const resp = await ChatService.getMessage(text);
    loading.value = false;

    if (resp) chatMessages.value.push(resp);
};
</script>

<style src="./styles.scss" lang="scss" scoped />
