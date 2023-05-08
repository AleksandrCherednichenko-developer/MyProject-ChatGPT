import req from '@/services/simple-request';

export class BaseCRUD {
    static async POST ({
        uri,
        body = null,
    }) {
        return req({
            method: 'POST',
            uri,
            body,
        });
    }
}
