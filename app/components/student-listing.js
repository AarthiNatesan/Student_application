import Component from '@ember/component';

export default Component.extend({
    actions: {
        display() {
            this.send('openModal', {
                component: 'pop-up',
                params: [
                    'register',
                    'first',
                    'last',
                    'phone',
                    'year',
                    'city'
                ]
            });
        }
    }
});