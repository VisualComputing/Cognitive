## Visual Computing Slides -- Cognitive
[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors)

Part of the *Visual Computing* course given at [National University of Colombia](http://www.disi.unal.edu.co/) by [Jean Pierre Charalambos](http://otrolado.info) and [Andres Colubri](http://andrescolubri.net/).

Powered by [reveal](https://github.com/hakimel/reveal.js).

<!--- a long list of students and links to their pages. To come ;) -->

## Installation

 ```sh
 $ git clone https://github.com/VisualComputing/Cognitive.git
 $ cd Cognitive
 $ git checkout gh-pages
 ```

## Folder Structure

    |-- css/
    |-- js/
    |-- plugin/
    |-- lib/
    |-- fig/
    |-- sketches/
    |-- index.html
    |-- source.md
    
Refer to the [reveal folder structure](https://github.com/hakimel/reveal.js#folder-structure) for more details, and to the *Setup* below.

## Setup

External markdown and speaker notes, require that presentations run from a local web server. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the slides source code.

1. Install [Node.js](http://nodejs.org/)

2. Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli)

3. Install dependencies (you must be already on the presentation folder, otherwise ```$ cd Cognitive```)

 ```sh
 $ npm install
 ```

4. Edit the presentation contents using [markdown](http://daringfireball.net/projects/markdown/) in the `source.md`, adding figures to the `fig/` folder and [p5.js skectches](http://p5js.org/) to the `skectches/` folder (detailed instructions below) as needed.

5. Serve the presentation and monitor source files for changes

 ```sh
 $ grunt serve
 ```

6. Open <http://localhost:8000> to view your presentation

 You can change the port by using `grunt serve --port 8001`.

<!---

7. Update to upstream

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
 
2. Define a canvas _id_ (e.g., ```mysketch_id```) within your _mysketch.js_ `setup` function:

  * Use [p5.js 'global mode'](https://github.com/lmccart/itp-creative-js/wiki/Spring-2014:-Week-5#global-and-instance-mode) when including just a single sketch into the presentation.

    ```javascript
    function setup() {
        var myCanvas = createCanvas(400, 400);
        myCanvas.parent('mysketch_id');
    }
    ```

  * Use ['instance mode'](https://github.com/lmccart/itp-creative-js/wiki/Spring-2014:-Week-5#global-and-instance-mode) if you need to inlcude more than one:

    ```javascript
    var sketch1 = function( p ) {
        p.setup = function() {
            p.createCanvas(400, 400);
        };
    };
    var myp5_1 = new p5(sketch1, 'mysketch_id');
    ```

3. Include your sketch as a script in the ```index.html```, e.g., ```<script src="sketches/mysketch.js"></script>```

4. Locate your sketch in the ```source.md``` at the place you want it to be, using the _id_: defined in step *2*, e.g., ```<div id='mysketch_id'></div>```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/10618020?v=4" width="100px;"/><br /><sub><b>Fabián Monsalve</b></sub>](https://github.com/whispers16)<br />[💻](https://github.com/VisualComputing/Cognitive/commits?author=whispers16 "Code") | [<img src="https://avatars1.githubusercontent.com/u/5273761?v=4" width="100px;"/><br /><sub><b>eabohorquezg</b></sub>](https://github.com/eabohorquezg)<br />[💻](https://github.com/VisualComputing/Cognitive/commits?author=eabohorquezg "Code") | [<img src="https://avatars2.githubusercontent.com/u/96923?v=4" width="100px;"/><br /><sub><b>xyos</b></sub>](https://github.com/xyos)<br />[💻](https://github.com/VisualComputing/Cognitive/commits?author=xyos "Code") | [<img src="https://avatars2.githubusercontent.com/u/7006928?v=4" width="100px;"/><br /><sub><b>caatovarbo</b></sub>](https://github.com/caatovarbo)<br />[💻](https://github.com/VisualComputing/Cognitive/commits?author=caatovarbo "Code") | [<img src="https://avatars2.githubusercontent.com/u/14080124?v=4" width="100px;"/><br /><sub><b>Sergio Castro</b></sub>](https://github.com/sacastroc)<br />[💻](https://github.com/VisualComputing/Cognitive/commits?author=sacastroc "Code") | [<img src="https://avatars2.githubusercontent.com/u/15643489?v=4" width="100px;"/><br /><sub><b>Víctor Ramírez</b></sub>](https://github.com/vgramirezc)<br />[💻](https://github.com/VisualComputing/Cognitive/commits?author=vgramirezc "Code") | [<img src="https://avatars1.githubusercontent.com/u/7451047?v=4" width="100px;"/><br /><sub><b>Neill Giraldo</b></sub>](https://www.hackerrank.com/NeillGiraldo)<br />[💻](https://github.com/VisualComputing/Cognitive/commits?author=NeillGiraldo "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars2.githubusercontent.com/u/645599?v=4" width="100px;"/><br /><sub><b>Jean Pierre Charalambos</b></sub>](https://github.com/nakednous)<br />[💻](https://github.com/VisualComputing/Cognitive/commits?author=nakednous "Code") [📖](https://github.com/VisualComputing/Cognitive/commits?author=nakednous "Documentation") [🐛](https://github.com/VisualComputing/Cognitive/issues?q=author%3Anakednous "Bug reports") [🎨](#design-nakednous "Design") [🤔](#ideas-nakednous "Ideas, Planning, & Feedback") [💬](#question-nakednous "Answering Questions") [📢](#talk-nakednous "Talks") [⚠️](https://github.com/VisualComputing/Cognitive/commits?author=nakednous "Tests") [🔧](#tool-nakednous "Tools") | [<img src="https://avatars0.githubusercontent.com/u/14846464?v=4" width="100px;"/><br /><sub><b>Julián Salomón</b></sub>](https://github.com/JulianSalomon)<br />[💻](https://github.com/VisualComputing/Cognitive/commits?author=JulianSalomon "Code") [🤔](#ideas-JulianSalomon "Ideas, Planning, & Feedback") [🐛](https://github.com/VisualComputing/Cognitive/issues?q=author%3AJulianSalomon "Bug reports") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
