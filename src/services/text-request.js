const { VITE_API_KEY, VITE_API_TEXT } = import.meta.env;
const CONTENT_TYPE = 'Content-Type';
const MIME_TYPE = 'application/json';

async function getText (text) {
    const status = {
        code: 418,
        ok: false,
    };
    let payload = null;
    let data = null;
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${VITE_API_KEY}`,
            'Content-Type': MIME_TYPE,
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: text,
            max_tokens: 2048,
            temperature: 0.3,
        }),
    };

    try {
        const resp = await fetch(VITE_API_TEXT, options);

        status.code = resp.status;
        status.ok = resp.ok;

        if (resp.headers.get(CONTENT_TYPE).split(';')[0] === MIME_TYPE) {
            data = await resp.json().catch(() => null);
        }
        payload = { message: data?.choices[0].text };
    } catch (error) {
        console.log(error);
    }

    return {
        status,
        payload,
    };
}

export default getText;
