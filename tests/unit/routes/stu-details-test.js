import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | stu_details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:stu-details');
    assert.ok(route);
  });
});
