import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveArticle() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        author: this.get('author'),
        text: this.get('text'),
        timestamp: this.get('timestamp'),
      };
      this.sendAction('saveArticle', params);
    }
  }
});
