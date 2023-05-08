const { VITE_API_KEY } = import.meta.env;
const CONTENT_TYPE = 'Content-Type';
const MIME_TYPE = 'application/json';

async function request ({
    method = 'POST',
    mimeType = MIME_TYPE,
    uri,
    body,
}) {
    const status = {
        code: 418,
        ok: false,
    };
    let payload = null;

    const options = {
        method,
        headers: {
            Authorization: `Bearer ${VITE_API_KEY}`,
            'Content-Type': mimeType,
        },
        body: JSON.stringify(body),
    };
    try {
        const resp = await fetch(uri, options);

        status.code = resp?.status;
        status.ok = resp?.ok;

        if (resp.headers.get(CONTENT_TYPE).split(';')[0] === MIME_TYPE) {
            payload = await resp.json().catch(() => null);
        }
        payload ??= { message: resp.message };
    } catch (error) {
        console.log(error);
    }

    return {
        status,
        payload,
    };
}

export default request;
