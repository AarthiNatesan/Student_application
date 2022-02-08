import Component from '@ember/component';

export default Component.extend({
    actions: {
        display() {
            this.send('openModal', {
                component: 'pop-up',
                params: [
                    'registration_num',
                    'first_name',
                    'last_name',
                    'phone_num',
                    'year',
                    'city'
                ]
            });
        }
    }
});