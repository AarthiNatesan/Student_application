import DS from 'ember-data';

export default DS.Model.extend({
    registration_num: DS.attr(),
    first_name: DS.attr(),
    last_name: DS.attr(),
    phone_num: DS.attr(),
    year: DS.attr(),
    city: DS.attr()
})