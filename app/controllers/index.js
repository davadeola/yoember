import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddres:'',
  // isDisabled: true,
  actualEmailAddress: Ember.computed('emailAddres', function(){
    console.log('actualEmailAddress function is called: ', this.get('emailAddres'));
  }),

  emailAddressChanged: Ember.observer('emailAddress', function(){
    console.log('observer is called' , this.get('emailAddress'));
  }),


  // isDisabled: Ember.computed.empty('emailAddress'),//returns true if the emailAddress field is empty

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/), //returns true if the entered email follows in this format
  isDisabled: Ember.computed.not('isValid')//Ember.computed.not sets inValid to the opposite of the returned value i.e. false
});
