// @ts-expect-error
import Vue from '../vue';

import { windows } from '../Taumiel';

const app = new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        about: () => {
            windows.create({
                url: '../html/about.html',
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
});
