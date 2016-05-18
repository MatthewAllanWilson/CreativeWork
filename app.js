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
  var optionTag = '<option value="' + a.id + '">' + a.title + '</option>';
  $('#project-filter').append(optionTag);
});

$('.projects').hide();

//on click hide all articles, show one with id, when click again show all articles
$('.project-image').click(function(e) {
  $('.menu-item').hide();
  $('.' + e.target.id).fadeIn();
});

$('button').click(function() {
  $('.projects').hide();
  $('.menu-item').fadeIn();
});

//This works but breaks everything when you select the top option.  Need to get it to reset to this after each selection.  Also, makes it slow because it hides projects that are already hidden before it shows the selected project.
$('#project-filter').on('change', function () {
  $('.menu-item').hide();
  $('.projects').hide();
  $('.' + this.value).fadeIn();
});
