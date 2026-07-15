var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Groups and Geometry",
  "body": "  Robert W. Bell   Groups and Geometry   These are the course notes for Groups and Geometry , Fall 2026, at Michigan State University. The course is being offered as MTH 496: Capstone in Mathematics. The course is intended for juniors and seniors who have studied at least one semester of linear algebra, analysis, and algebra. The overarching theme is symmetrical objects in geometry are naturally studied using group theory; conversely, abstract groups can be profitably studied via their actions on sufficiently symmetric geometric spaces.   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction   The most intriguing geometrical objects are symmetrical. An abstract group is an algebraic construct designed to quantify symmetry precisely. And so, the study of groups and geometry in tandem is both natural and symbiotic. These notes are intended to introduce upper-level undergraduate students to their beautiful interplay.    Regular Polygons  Let be a polygon with sides. Thus, consists of points (vertices), , and line segments, , where the segment has endpoints and . Indices are to be read modulo .  Suppose that is a regular polygon. This means that every side has the same length and that every angle,  has the same measure.  How many symmetries does admit?  Whenever a question is posed in these notes, it is intended that the reader should pause and think.   The polygon has both rotational symmetry and mirror symmetry. We will now demonstrate one method of finding all of the symmetries of .   A frog    A picture of frog that hopped into a geometry paper.     Question for later: why does the operator display in this font?   "
},
{
  "id": "subsection-1-7",
  "level": "2",
  "url": "section-1.html#subsection-1-7",
  "type": "Figure",
  "number": "1.1",
  "title": "",
  "body": " A frog    A picture of frog that hopped into a geometry paper.    "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "2",
  "title": "My Additional Section",
  "body": " My Additional Section  foo   The graph made by TikZ   A 5-cycle     bar  "
},
{
  "id": "figure-tikz-example-diagram",
  "level": "2",
  "url": "section-2.html#figure-tikz-example-diagram",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " The graph made by TikZ   A 5-cycle    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
