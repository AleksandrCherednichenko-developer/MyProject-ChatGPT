export const polyfillClipboard = () => {
    if (navigator.clipboard) return;
    navigator.clipboard = {
        writeText: text => {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed'; // avoid scrolling to bottom
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                if (document.execCommand('copy')) {
                    // success
                } else {
                    throw new Error('Oops');
                }
            } finally {
                document.body.removeChild(textArea);
            }
        },
    };
};
