<template>
    <div class="content-container">
        <h6 class="header_h6">
            {{ $t('welcome') }}
        </h6>

        <form @submit.prevent="sendMessage(textValue)">
            <textarea v-model="textValue" />
            <button type="submit">
                submit
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
};
</script>

<script setup>
import { ref } from 'vue';
import getMessage from '@/services/base-request';
import { toastError, toastSuccess } from '@/composables/toast';

const textValue = ref();

const chatMessages = ref([]);

const sendMessage = async text => {
    const resp = await getMessage(text);
    console.log('-> resp', resp);
    if (resp.status.ok) {
        toastSuccess();
    } else {
        toastError();
    }
};
</script>
