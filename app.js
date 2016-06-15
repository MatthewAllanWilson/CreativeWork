function Project (obj) {
  this.title = obj.title;
  this.body = obj.body;
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

$('#project-filter').on('change', function () {
  $('.menu-item').hide();
  $('.projects').hide();
  $('.' + this.value).fadeIn();
  $('#project-filter').prop('selectedIndex',0);
});
