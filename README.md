# Astro Pinball

[LIVE LINK](https://seanperfecto.github.io/Astro-Pinball/)

This pure Javascript and HTML game strips down a classic arcade game into a more visually appealing and simple (yet addicting) web browser game.

![screencast](http://res.cloudinary.com/dqr2mejhc/image/upload/c_scale,w_671/v1497831590/astro_x2pxnq.png)

## Instructions

The objective is straightforward as it gets: rack up the most points that you can with one life. Not your average classic pinball game, my game implements a faster pace and more unpredictability, leading to a more addicting gameplay. Try to get at least 1000 points. Play once, and be hooked.

Designed and implemented for anybody to use, this game is controlled solely by five different keyboard keys:

- Down Arrow: Launch Pinball
- Left Arrow: Left Flipper
- Right Arrow: Right Flipper
- Spacebar: Restart Game
- "M" Key: Mute/Unmute Audio

## Technology/Languages Used

The biggest challenge that I had to implement within making this project in a week was to construct this game without any Javascript libraries. Although looking back on it, there are some disadvantageous to this, I am glad I spent the time to learn more about plain Vanilla JavaScript and HTML Canvas.

Technologies I used:
- `Plain Vanilla JavaScript`
- `HTML5 Canvas`
- `CSS3`

## Technical Implementation

Perhaps by not using any library, the fun aspect of implementing these features was my revisit to several math and physic type functions and integrating them into code.

#### Collision Detection

Interaction of the pinball with the different objects was the main challenge with this game. Integrating physical properties like gravity and elasticity the game was fairly simple. The two parts that I had to figure out were how to detect collision with the pinball and the object and how to resolve the velocity vector of the pinball after collision.

With collision detection, the challenge was handling the different shapes that interacted with the pinball. For example, to detect collision with a circular bumper, I compared the distance between them and their radii.

```javascript
// ball.js

let distance = Math.sqrt(
  Math.pow(this.ballPosX - obj.ballPosX, 2) +
  Math.pow(this.ballPosY - obj.ballPosY, 2));
return distance < (this.radius + obj.radius);
```
But something different such as the flipper (a rectangle), implements different collision detection. For lines/rectangles, I compared the distance between the center of the object and the circle, and tested each edge case:

```javascript
// ball.js

// X and Y distance between the ball and the bump
let distX = Math.abs(this.ballPosX - (obj.mid.x));
let distY = Math.abs(this.ballPosY - (obj.mid.y));

// Distance too far
if (distX > (obj.halfwidth + this.radius)) { return false; }
if (distY > (obj.halfheight + this.radius)) { return false; }

// Distance definitely colliding
if (distX <= obj.halfwidth) { return true; }
if (distY <= obj.halfheight) { return true; }

// Checks corners using Pythagorean Theorem
let dx = distX - obj.halfwidth;
let dy = distY - obj.halfheight;
return ((dx*dx)+(dy*dy)<=(this.radius*this.radius));
```

#### Elastic Collision Outcome

The second challenge after detecting collisions is changing the pinball's velocity after colliding with an object. Most of my collisions redirect the ball's velocity vector through calculating the changed direction due to the interaction between the normalized velocity vector and the normalized vector of contact of the object.

```javascript
// ball.js
// Collision with the flipper
let dd = (this.dnorm.x*obj.vnorm.x + this.dnorm.y*obj.vnorm.y)*2;
this.refl = {x: (obj.vnorm.x * dd - this.dnorm.x),
                  y: (obj.vnorm.y * dd - this.dnorm.y) };
let length = Math.sqrt(this.refl.x*this.refl.x + this.refl.y*this.refl.y);
this.ballPosY -= 4;
this.ballVelX = (this.refl.x/length) * this.speed;
this.ballVelY = ((this.refl.y/length) * this.speed * 1.1);

```
This equation above takes the dot product of the two vectors and integrates that into the new reflected velocity vector of the ball. I also had to change the ball's position slightly to simulate the ball only hitting the edge of the flipper. Lastly, I added some additional speed on the ball after to give the game a faster pace.

## Future Features

With this game implement in a week, there are a couple of bugs that I want to fix and features that I want to change and add. Some possible ideas that I want to implement to the game include:

- Right now, the thruster is affect the ball through different angles, yet its flipper velocity is not taken account for. I want to take account its velocity and time and adjust the ball's speed through it.

- Polish the collision detections. I want to make the ball collision smoother and just be one single collision with the different objects (right now the ball interacts with the object sometimes several times upon collision, causing a weird motion).

- Later on, I would want to add different transition effects when playing the game (without any libraries would be preferred).
