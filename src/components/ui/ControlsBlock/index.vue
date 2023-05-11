<template>
    <div class="chat__page-controls">
        <UIInput
            :value="userMessage"
            class="chat__page-controls-input"
            @input="(value)=>userMessage=value"
            @keydown.enter="sendMessage()"
            @clear-input="userMessage=''"
        />
        <SubmitButton
            class="chat__page-controls-button"
            @click="sendMessage()"
        />
    </div>
</template>

<script>
export default {
    name: 'ControlsBlock',
};
</script>

<script setup>
import { ref } from 'vue';
import UIInput from '@/components/ui/UIInput/index.vue';
import SubmitButton from '@/components/ui/buttons/SubmitButton/index.vue';

const emit = defineEmits(['send-message']);

const userMessage = ref('');

const sendMessage = () => {
    emit('send-message', userMessage.value);
    userMessage.value = '';
};
</script>
