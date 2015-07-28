import Ember from "ember";

export default Ember.Route.extend({
  model: function( params ) {
    return this.store.find( "notebook", { user: params.user_id });
  },

  actions: {
    addNotebook: function() {
      var self = this;
      var notebook = this.store.createRecord( "notebook", {
        title: this.controller.get( "title" ),
        user:  this.controllerFor( "application" ).get( "user" )
      });

      notebook.save().then( function() {
        console.log( "save successful" );
        self.controller.set( "title", null );
        self.refresh();
      }, function() {
        console.log( "save failed" );
      });
    }
  }
});
