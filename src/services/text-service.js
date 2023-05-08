import { BaseCRUD } from '@/services/base-request';
import { toastError } from '@/composables/toast';

const { VITE_API_TEXT, VITE_API_MODEL_TEXT } = import.meta.env;

export class TextService {
    static async getText (text) {
        const resp = await BaseCRUD.POST({
            uri: VITE_API_TEXT,
            body: {
                model: VITE_API_MODEL_TEXT,
                prompt: text,
                max_tokens: 2048,
                temperature: 0.3,
            },
        });

        if (!resp.status.ok) return toastError();

        return resp.payload?.choices[0].text;
    }
}
