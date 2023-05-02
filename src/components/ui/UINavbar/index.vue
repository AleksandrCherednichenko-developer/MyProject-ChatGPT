<template>
    <nav class="navbar">
        <div class="navbar__inner">
            <router-link
                v-for="item of navbarMenu"
                :key="item.name"
                :to="item.path"
                class="navbar-item"
                exact-active-class="navbar-item--active"
                @click="onClickItem"
            >
                <SvgIcon :name="item.icon" class="navbar-item__icon" />
                <span class="navbar-item__text">{{ $t(`navbar.${item.name}`) }}</span>
            </router-link>
        </div>
        <LanguageSelect />
    </nav>
</template>

<script>
export default {
    name: 'UINavbar',
};
</script>

<script setup>
import { inject } from 'vue';
import { ROUTE_NAMES } from '@/constants/route-names';
import Tr from '@/i18n/translation';
import SvgIcon from '@/components/ui/SvgIcon/index.vue';
import LanguageSelect from '@/components/ui/LanguageSelect/index.vue';

const emitter = inject('emitter');
const emit = defineEmits(['click-navbar-item']);

const navbarMenu = [
    {
        name: 'home',
        path: Tr.i18nRoute({ name: ROUTE_NAMES.HOME_PAGE.routeName }),
        icon: 'home',
    },
    {
        name: 'about',
        path: Tr.i18nRoute({ name: ROUTE_NAMES.ABOUT_PAGE.routeName }),
        icon: 'info',
    },
    {
        name: 'contact',
        path: Tr.i18nRoute({ name: ROUTE_NAMES.CONTACT_PAGE.routeName }),
        icon: 'phone',
    },
];

const onClickItem = () => {
    emit('click-navbar-item');
    emitter.emit('close-navbar');
};
</script>

<style src="./styles.scss" lang="scss" scoped />
