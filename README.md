## Visual Computing Slides -- Cognitive

Part of the *Visual Computing* course given at [National University of Colombia](http://www.disi.unal.edu.co/) by [Jean Pierre Charalambos](http://otrolado.info) and [Andres Colubri](http://codeanticode.wordpress.com/).

Powered by [reveal](https://github.com/hakimel/reveal.js).

Made possible thanks to... 

<!--- a long list of students and links to their pages. To come ;) -->

## Setup

 ```sh
 $ git clone https://github.com/VisualComputing/Cognitive.git
 $ git checkout gh-pages
 ```

## Folder Structure

    |-- css/
    |-- js/
    |-- plugin/
    |-- lib/
    |-- fig/
    |-- sketches/
    |-- source.md
    
Refer to the [reveal folder structure](https://github.com/hakimel/reveal.js#folder-structure) for more details, and to the *Setup* below.

## Setup

External markdown and speaker notes, require that presentations run from a local web server. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the slides source code.

1. Install [Node.js](http://nodejs.org/)

2. Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli)

3. Navigate to the presentation folder

 ```sh
 $ cd Cognitive
 ```

5. Install dependencies

 ```sh
 $ npm install
 ```

6. Edit the presentation contents using markdown in the `source.md` and adding figures as needed to the `fig/` folder.

7. Serve the presentation and monitor source files for changes

 ```sh
 $ grunt serve
 ```

8. Open <http://localhost:8000> to view your presentation

 You can change the port by using `grunt serve --port 8001`.

<!---

9. Update to upstream

 ```sh
 $ git remote add reveal.js https://github.com/hakimel/reveal.js.git
 $ git pull reveal.js master
 ```
-->

## [p5.js](http://p5js.org/) sketches

1. Create your js sketch in the ```sketches``` folder, e.g.,


 ```sh
 $ touch sketches/mysketch.js
 ```
 
2. Define a canvas _id_ for your sketch (e.g., ```mysketch_id```):

 ```javascript
 function setup() {
    var myCanvas = createCanvas(400, 400);
    myCanvas.parent('mysketch_id');
 }
 ```

3. Include your sketch as a script in the ```index.html```, e.g., ```<script src="sketches/mysketch.js"></script>```

4. Locate your sketch in the ```source.md``` at the place you want it to be, using the _id_: defined in step *2*, e.g., ```<div id='mysketch_id'></div>```
