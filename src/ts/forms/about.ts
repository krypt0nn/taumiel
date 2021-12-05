import * as Vue from 'vue';

import { windows } from '../Taumiel';

Vue.createApp({
    data()
    {
        return {
            message: 'Banana'
        };
    },

    // Show this window when it's fully loaded
    mounted: () => windows.current.show()
}).mount('#app');
