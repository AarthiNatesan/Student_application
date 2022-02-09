import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        success() {
            const reg_num = this.get('reg_num');
            const first = this.get('first');
            const last = this.get('last');
            const ph_num = this.get('ph_num');
            const year = this.get('year');
            const city = this.get('city');
            const newRecord = this.store.createRecord('studentdetail', {
                registration_num: reg_num,
                first_name: first,
                last_name: last,
                phone_num: ph_num,
                year: year,
                city: city
            })
        }
    }
});
