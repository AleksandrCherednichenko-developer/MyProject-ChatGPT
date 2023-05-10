<template>
    <div ref="messagesBlock" class="chat__page-messages">
        <template v-for="(message, i) in props.chatMessages" :key="i">
            <UIMessage
                v-if="message.content"
                :text="message.content"
                :side="message.role==='user' ? 'right' : 'left'"
            />
        </template>

        <LoaderMessages v-if="loading" side="left" />
    </div>
</template>

<script>
export default {
    name: 'MessagesBlock',
};
</script>

<script setup>
import { onUpdated, ref } from 'vue';
import UIMessage from '@/components/ui/UIMessage/index.vue';
import LoaderMessages from '@/components/ui/LoaderMessages/index.vue';

const props = defineProps({
    chatMessages: { type: Array, default: () => []},
    loading: { type: Boolean },
});

const messagesBlock = ref(null);

onUpdated(() => {
    messagesBlock.value.scrollTop = messagesBlock.value.scrollHeight;
});
</script>
