import Controller from '@ember/controller';

export default Controller.extend({
    isShowingModal: false,
    actions: {
        isShowingTranslucent() {
            this.toggleProperty('isShowingModal');
        }
    }
});