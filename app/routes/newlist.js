import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        success() {
            alert("Successfully added");
            // const reg_num = this.get('reg_num');
            // const first = this.get('first');
            // const last = this.get('last');
            // const ph_num = this.get('ph');
            // const year = this.get('year');
            // const city = this.get('city');
            // var newRecord = this.store.createRecord('studentdetail', {
            //     register: reg_num,
            //     first: first,
            //     last: last,
            //     phone: ph_num,
            //     year: year,
            //     city: city
            // })
        }
    }
});