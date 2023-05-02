import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const lockedScrollClass = 'scroll-locked';

const lock = el => {
    disableBodyScroll(el, {
        reserveScrollBarGap: true,
        allowTouchMove: el => el === window.bodyScrollLocker || window.bodyScrollLocker.contains(el),
    });
    window.bodyScrollLocker = el;
    document.body.classList.add(lockedScrollClass);
};

const unlock = el => {
    enableBodyScroll(el);
    window.bodyScrollLocker = null;
    document.body.classList.remove(lockedScrollClass);
};

const lockToggle = (el, binding) => {
    if ((!window.bodyScrollLocker && !binding.value) ||
        (window.bodyScrollLocker && window.bodyScrollLocker !== el)) return; // Element can unlock if this element locked body

    if (binding.value) {
        lock(el);
    } else {
        unlock(el);
    }
};

export default {
    name: 'body-scroll-lock',
    directive: {
        mounted (...args) {
            lockToggle(...args);
        },
        updated (...args) {
            lockToggle(...args);
        },
        beforeUnmount (el) {
            lockToggle(el, { value: false });
        },
    },
};
