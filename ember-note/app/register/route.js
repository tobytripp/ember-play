import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addNew: function() {
      var self = this;
      var user = this.store.createRecord( 'user', {
        name: this.controller.get( 'name' )
      });

      user.save().then( function() {
        console.log( 'save successful' );
        self.controller.set( 'message',
                             'A new user with the name "' +
                             self.controller.get( 'name' ) +
                             '" was added.' );
        self.controller.set( 'name', null );
      }, function() {
        console.log( 'save failed' );
      });
    }
  }
});
