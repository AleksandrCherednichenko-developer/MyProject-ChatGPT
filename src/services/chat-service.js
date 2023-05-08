import { BaseCRUD } from '@/services/base-request';
import { toastError } from '@/composables/toast';

const { VITE_API_CHAT, VITE_API_MODEL_CHAT } = import.meta.env;

export class ChatService {
    static async getMessage (text) {
        const resp = await BaseCRUD.POST({
            uri: VITE_API_CHAT,
            body: {
                model: VITE_API_MODEL_CHAT,
                messages: [{
                    role: 'user',
                    content: text,
                }],
                max_tokens: 1000,
                temperature: 0.2,
            },
        });

        if (!resp.status.ok) return toastError();

        return resp.payload?.choices[0].message;
    }
}
