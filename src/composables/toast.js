import { useToast } from 'vue-toastification';
import i18n from '@/i18n';
import { toastTimeout } from '@/constants/toast-options';

const toast = useToast();
const { t } = i18n.global;

export const toastSuccess = (text = null) => {
    return toast.success(text ? t(`toast.${text}`) : 'Success', { timeout: toastTimeout });
};

export const toastError = (text = null) => {
    return toast.error(text ? t(`toast.${text}`) : 'Error', { timeout: toastTimeout });
};
