import Route from '@ember/routing/route';

export default Route.extend({
    openModal(options) {
        let model = this.modelFor(this.routeName);
        options.canShowModal = true;
        Ember.setProperties(model, {
            modalOptions: options
        });
    }
});