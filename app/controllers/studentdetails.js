import Controller from '@ember/controller';

export default Controller.extend({
    isShowingModal: false,
    student: null,
    actions: {
        isShowingTranslucent(data) {
            this.set('student', data);
            this.toggleProperty('isShowingModal');
        }
    }
});