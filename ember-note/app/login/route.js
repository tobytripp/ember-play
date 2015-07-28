import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      var self = this;
      this.store.find( 'user', {
        name: this.controller.get( 'name' )
      }).then( function( users ) {
        if( users.get( 'length' ) === 1 ) {
          var user = users.objectAt(0);
          self.controllerFor( 'application' ).set( 'user', user );
          self.transitionTo( 'notebooks', user.get( 'id' ) );
        } else {
          console.log( 'unexpected query result' );
        }
      });
    }
  }
});
