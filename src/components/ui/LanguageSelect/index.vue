<template>
    <Multiselect
        class="languages-select"
        :model-value="selectedLocale"
        :options="options"
        label="name"
        track-by="value"
        :option-height="104"
        :show-labels="false"
        :searchable="false"
        :allow-empty="false"
        @update:model-value="switchLanguage"
    >
        <template #option="props">
            <p>{{ $t(`locales.${props.option.value}`) }}</p>
        </template>
    </Multiselect>
</template>

<script>
export default {
    name: 'LanguageSelect',
};
</script>

<script setup>
import { computed, inject } from 'vue';
import { useI18n } from 'vue-i18n';
import Multiselect from 'vue-multiselect';
import { useRoute, useRouter } from 'vue-router';
import Tr from '@/i18n/translation';

const router = useRouter();
const route = useRoute();
const { t, locale } = useI18n();
const emitter = inject('emitter');
const { supportedLocales } = Tr;

const selectedLocale = computed(() => ({ value: locale.value, name: t(`locales.${locale.value}`) }));

const options = supportedLocales.map(el => ({
    value: el,
    name: t(`locales.${el}`),
}));

const switchLanguage = ({ value }) => {
    Tr.switchLanguage(value);

    router.replace({
        ...route,
        params: {
            ...route.params,
            locale: value,
        },
    });
    emitter.emit('close-navbar');
};
</script>

<style src="./styles.scss" lang="scss" scoped />
