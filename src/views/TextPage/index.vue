<template>
    <section class="section content-container dialogue-page">
        <div class="preview">
            <p>{{ $t('preview.text') }}</p>
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
                @keydown.enter="sendText(userMessage)"
                @clear-input="userMessage=''"
            />
            <SubmitButton
                class="controls-button"
                @click="sendText(userMessage)"
            />
        </div>
    </section>
</template>

<script>
export default {
    name: 'TextPage',
};
</script>

<script setup>
import { ref } from 'vue';
import getText from '@/services/text-request';
import { toastError } from '@/composables/toast';
import SubmitButton from '@/components/ui/buttons/SubmitButton/index.vue';
import UIInput from '@/components/ui/UIInput/index.vue';
import LoaderMessages from '@/components/ui/LoaderMessages/index.vue';
import UIMessage from '@/components/ui/UIMessage/index.vue';

const userMessage = ref('');
const chatMessages = ref([]);
const loading = ref(false);

const sendText = async text => {
    loading.value = true;
    chatMessages.value.push({ role: 'user', content: text });
    userMessage.value = '';

    const resp = await getText(text);
    loading.value = false;

    if (!resp.status.ok) return toastError();
    chatMessages.value.push({ role: 'assistant', content: resp.payload.message });
};
</script>

<style src="./styles.scss" lang="scss" scoped />
