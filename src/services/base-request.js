const { VITE_API_CHAT, VITE_API_CHAT_KEY } = import.meta.env;
const CONTENT_TYPE = 'Content-Type';
const MIME_TYPE = 'application/json';

async function getMessage (text) {
    const status = {
        code: 418,
        ok: false,
    };
    let payload = null;
    let data = null;
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${VITE_API_CHAT_KEY}`,
            'Content-Type': MIME_TYPE,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: 'user',
                content: text,
            }],
            max_tokens: 1000,
        }),
    };

    try {
        const resp = await fetch(VITE_API_CHAT, options);

        status.code = resp.status;
        status.ok = resp.ok;

        if (resp.headers.get(CONTENT_TYPE).split(';')[0] === MIME_TYPE) {
            data = await resp.json().catch(() => null);
        }
        payload = { message: data?.choices[0].message.content };
    } catch (error) {
        console.log(error);
    }

    return {
        status,
        payload,
    };
}

export default getMessage;
