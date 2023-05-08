<template>
    <section class="section content-container dialogue-page">
        <div class="preview">
            <p>{{ $t('preview.chat') }}</p>
        </div>

        <div class="messages">
            <template v-for="(message, i) in chatMessages" :key="i">
                <UIMessage
                    :text="message.content"
                    :side="message.role==='user' ? 'right' : 'left'"
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
import LoaderMessages from '@/components/ui/LoaderMessages/index.vue';
import UIMessage from '@/components/ui/UIMessage/index.vue';

const userMessage = ref('');
const chatMessages = ref([]);
const loading = ref(false);

const sendMessage = async text => {
    if (!text) return;

    loading.value = true;
    chatMessages.value.push({ role: 'user', content: text });
    userMessage.value = '';

    const resp = await ChatService.getMessage(text);
    loading.value = false;

    if (resp) chatMessages.value.push(resp);
};
</script>

<style src="./styles.scss" lang="scss" scoped />
