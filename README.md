Requirements
==========
* Tested on MacOS High Sierra
* Requires Node v8.6.0. Node 6.x likely won't work since I'm using async/await in some places.

How to run
==========

1) Run 'npm install'
2) Run 'npm start'
3) See output!

Full scale application
======================
Ideally, a full scale application would have more filtering capabilities. The purpose of the application seems to be to figure out which food truck I want to eat at today. If so, I would personally prefer the following added functionality:
* It would be good to know how rare a truck is available to eat at. So it would be great if I could know which trucks are available tomorrow or other days of the week.
* Variety is the spice of life! So maybe 10 food trucks isn't enough variety for my food hunting experience. It would be great if I could change the number of trucks I wish to see.
* I might also seek to limit the number of decision I have to make each day by having the program pick a random food truck for me to eat at.

Design-wise, I can create separate functions to filter the food trucks based on the input parameters to the program.