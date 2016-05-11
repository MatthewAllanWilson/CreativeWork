function Project (obj) {
  this.title = obj.title;
  this.description = obj.description;
  this.link = obj.link;
  this.image = obj.image;
}

var projectArray = [];

projectData.forEach(function(e) {
  projectArray.push(new Project(e));
});

Project.prototype.toHtml = function() {
  var $source = $('#project-template').html();
  var template = Handlebars.compile($source);
  return template(this);
};

projectArray.forEach(function(a){
  $('#project-list').append(a.toHtml());
});
