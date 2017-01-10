import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    viewArticle(params) {
      this.transitionTo('article', params)
    }
  }
});
