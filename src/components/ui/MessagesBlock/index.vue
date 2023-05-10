<template>
    <div ref="messagesBlock" class="chat__page-messages">
        <template v-if="props.typeMessages === 'text'">
            <template v-for="(message, i) in props.chatMessages" :key="i">
                <UIMessage
                    v-if="message.content"
                    :text="message.content"
                    :side="message.role==='user' ? 'right' : 'left'"
                />
            </template>
        </template>

        <template v-else-if="props.typeMessages === 'image'">
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
                    @open-full-size="emit('toggle-full-size', message.content)"
                />
            </template>
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
    chatMessages: { type: Array, default: () => [], required: true },
    loading: { type: Boolean, required: true },
    typeMessages: { type: String, default: 'text' },
});

const emit = defineEmits(['toggle-full-size']);

const messagesBlock = ref(null);

onUpdated(() => {
    messagesBlock.value.scrollTop = messagesBlock.value.scrollHeight;
});
</script>
