---
slug: 'create-spreadsheet'
title: 'Create Spreadsheet'
link-1-label: 'Link 1 Label'
link-1-url: 'http://contrafabulists.com'
link-2-label: 'Link 2 Label'
link-2-url: 'http://contrafabulists.com'
image: 'https://s3.amazonaws.com/kinlane-productions/lessons/create-spreadsheet.png'
video: ''
audio: ''
help: 'undefined'
date: '117-6-28T01:01:00-01:00'
---
The datasource for the project is a Google Sheet. While not as powerful as a database, Google Sheets work just fine as a small data store, perfect for publishing simple data-driven projects. The best part is that it can be used as a data store by anyone, not just developers, making it an ideal vehicle for moving forward small data projects similar to how you would manage code using GitHub. 

This project depends on a specific set of fields, which are set as the first row for each column in the spreadsheet. Here are the fields needed for this project, and for each lesson:

- **slug** - A unique string to describe
- **title** - The title of the step.
- **description**** - The description for the step -- may include HTML.
- **link-1-label** - A label for link one.
- **link-1-url** - A url for link one.
- **link-2-label** - A label for link two.
- **link-2-url** - A url for link two.
- **image** - An images, screenshot, or other graphic for the lesson step.
- **video** - A video or screencast for the lesson step.
- **audio** - A audio file for the lesson step.
- **issues** - A link to the issue setup for this lesson step.

I recommend freezing the first row in the Google Sheet, preventing it from being caught up in any sorting of the steps. The script that takes the data from this spreadsheet depends on all these fields being present to work right. Make sure you do not change the column field names, only the contents of each row.

Use the spreadsheet as the central data store for this project. While the lesson will run off of whatever is published to the Github repository, the Google Sheet will always remain the primary source. It is an easy way to collaborate around the creation of the lesson. All you do is share the lesson with anyone you want to help create or manage the lesson, and publish regularly using the process outline further on in this lesson.
