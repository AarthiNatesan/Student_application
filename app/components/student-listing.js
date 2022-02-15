import Component from '@ember/component';

export default Component.extend({
    actions: {
        displayStu() {
            let display = 'display';
            // this.send('openModal', {
            //     component: 'pop-up',
            //     params: [
            //         'register',
            //         'first',
            //         'last',
            //         'phone',
            //         'year',
            //         'city'
            //     ]
            // });
            console.log(display);
            this.sendAction(display);
            console.log(display);
            alert(display);
        }
    }
});