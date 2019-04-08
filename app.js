const fs = require('fs')
const curriculum = require('./curriculum.json').data
const projects = require('./projects.json').allProjects

var csv = 'id, title\n'

for (var i in curriculum) {
  var course = curriculum[i]
  for (var j in course.projects) {
    var id = course.projects[j]
    var projectName = 'Unknown'
    for (var k in projects) {
      if (k == id) {
        projectName = projects[k].title
      }
    }
    csv += course.id + ',' + course.title + ',' + id + ',' + projectName + '\n'
  }
}

fs.writeFile('./data.csv', csv, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 
