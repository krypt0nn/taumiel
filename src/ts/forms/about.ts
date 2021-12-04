// @ts-expect-error
import Vue from '../vue';

import { windows } from '../Taumiel';

const app = new Vue({
    el: '#app',
    data: {
        message: 'Banana'
    },

    // Show this window when it's fully loaded
    mounted: () => windows.current.show()
});
