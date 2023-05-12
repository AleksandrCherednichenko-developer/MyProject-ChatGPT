<template>
    <section class="section content-container chat__page">
        <PreviewText text="chat" />

        <MessagesBlock :chat-messages="chatMessages" :loading="loading" />

        <ControlsBlock @send-message="(value)=>sendMessage(value)" />
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
import MessagesBlock from '@/components/ui/MessagesBlock/index.vue';
import PreviewText from '@/components/ui/PreviewText/index.vue';
import ControlsBlock from '@/components/ui/ControlsBlock/index.vue';

const chatMessages = ref([]);
const loading = ref(false);

const sendMessage = async text => {
    if (!text || loading.value) return;

    loading.value = true;
    chatMessages.value.push({ role: 'user', content: text });

    const resp = await ChatService.getMessage(text);
    loading.value = false;

    if (resp) chatMessages.value.push(resp);
};
</script>

<style src="./styles.scss" lang="scss" scoped />
