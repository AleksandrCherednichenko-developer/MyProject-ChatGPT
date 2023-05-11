import { BaseCRUD } from '@/services/base-request';
import { toastError } from '@/composables/toast';

const { VITE_API_IMAGE } = import.meta.env;

export class ImageService {
    static async getImage (text) {
        const resp = await BaseCRUD.POST({
            uri: VITE_API_IMAGE,
            body: {
                prompt: text,
                n: 1,
                size: '1024x1024',
            },
        });

        if (!resp.status.ok) return toastError();

        return resp.payload?.data[0].url;
    }
}
