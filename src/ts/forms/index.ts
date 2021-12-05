import * as Vue from 'vue';

import { windows } from '../Taumiel';

Vue.createApp({
    data()
    {
        return {
            counter: 0
        };
    },
    methods: {
        about: () => {
            windows.create({
                // We suppose that this file (index.ts) will be stored
                // as a `public/js/forms/index.js` after ts compilation,
                // but parcel bundler will strip all subfolders, so in `dist`
                // folder it will be stored together, without `js` and `forms` folders,
                // so we just use here html page's name
                url: 'about.html',
                title: 'About',
                sizes: {
                    width: 600,
                    height: 400
                },
                resizable: false,

                /**
                 * [show: true] will show window after creation
                 * [show: false] is similar to [visible: false]. It will load hidden window
                 * and then you can manually show it
                 */
                show: false
            });
        }
    },

    // Show this window when it's fully loaded
    mounted: () => windows.current.show()
}).mount('#app');
