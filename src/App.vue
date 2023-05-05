<template>
    <UIHeader
        :class="{'locked':locked}"
        @click-burger-button="(active)=>onToggleNavbar(active)"
    />

    <DefaultLayout v-body-scroll-lock="locked" />

    <BackgroundLayout :class="{'background-layout--active':activeNavbar}">
        <UINavbar
            :class="{'navbar--active':activeNavbar}"
            @click-navbar-item="onToggleNavbar(false)"
        />
    </BackgroundLayout>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Translations from '@/i18n/translation';
import UIHeader from '@/components/ui/UIHeader/index.vue';
import DefaultLayout from '@/layout/DefaultLayout/index.vue';
import UINavbar from '@/components/ui/UINavbar/index.vue';
import BackgroundLayout from '@/layout/BackgroundLayout/index.vue';

const activeNavbar = ref(false);
const locked = ref(false);

const onToggleNavbar = active => {
    activeNavbar.value = active.value;
    locked.value = active.value;
};

onMounted(async () => {
    await Translations.switchLanguage(Translations.guessDefaultLocale());
});
</script>
