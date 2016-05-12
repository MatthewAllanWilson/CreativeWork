function Project (obj) {
  this.title = obj.title;
  this.description = obj.description;
  this.link = obj.link;
  this.image = obj.image;
  this.id = obj.id;
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

$('.projects').hide();

//on click hide all articles, show one with id, when click again show all articles
$('.project-image').click(function(e) {
  $('.menu-item').hide();
  $('.' + e.target.id).fadeIn();
});
