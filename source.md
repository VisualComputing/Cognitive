<section id="themes">
	<h2>Themes</h2>
		<p>
			Set your presentation theme: <br>
			<!-- Hacks to swap themes after the page has loaded. Not flexible and only intended for the reveal.js demo deck. -->
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/black.css'); return false;">Black (default)</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/white.css'); return false;">White</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/league.css'); return false;">League</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/sky.css'); return false;">Sky</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/beige.css'); return false;">Beige</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/simple.css'); return false;">Simple</a> <br>
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/serif.css'); return false;">Serif</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/night.css'); return false;">Night</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/moon.css'); return false;">Moon</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/solarized.css'); return false;">Solarized</a>
		</p>
</section>

H:

## Index

 1. Shaders <!-- .element: class="fragment" data-fragment-index="1"-->
 2. Translation, rotation, scaling and sheared --> 2d, nonlinear,.. <!-- .element: class="fragment" data-fragment-index="2" -->
 3. Homogeneous space <!-- .element: class="fragment" data-fragment-index="3" -->
 4.  Translation, rotation(Euler), scaling and shearing --> 3d, linear,.. <!-- .element: class="fragment" data-fragment-index="4" -->
 5.  Orthogonal Matrix Rotations <!-- .element: class="fragment" data-fragment-index="5" -->
 6. Quaternion Rotations <!-- .element: class="fragment" data-fragment-index="6" -->
 7. Modeling Transformations <!-- .element: class="fragment" data-fragment-index="7" -->

H:

## History of Linear Perspective

<video data-autoplay src="https://www.youtube.com/watch?v=bkNMM8uiMww"></video>

V:

## Formulas 1

When $$a \ne 0$$, there are two solutions to $$(ax^2 + bx + c = 0)$$ and they are $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

V:

## Formulas 2

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are:

 1. $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$ <!-- .element: class="fragment" data-fragment-index="1"--> 
 2. $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$ <!-- .element: class="fragment" data-fragment-index="2"-->