import { useToast } from 'vue-toastification';
import i18n from '@/i18n';
import { successToastTimeout, errorToastTimeout } from '@/constants/toast-options';

const toast = useToast();

export const toastSuccess = text => {
    return toast.success('Success', { timeout: successToastTimeout });
    // return toast.success(t(`toast.${text}`), { timeout: errorToastTimeout });
};

export const toastError = text => {
    return toast.error('Error', { timeout: errorToastTimeout });
    // return toast.error(t(`toast.${text}`), { timeout: errorToastTimeout });
};
