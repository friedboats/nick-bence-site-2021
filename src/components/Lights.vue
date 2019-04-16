<template>
    <canvas 
        id="light-box-canvas" 
        width="500" 
        height="500" 
        :class="{bright: brightenLights && isHomePage}">
    </canvas>
</template>

<script>
    import {mapState} from 'vuex';
    
    export default {
        name: 'Navigation',
        data() {
            return {
                isRunning: true,
                curLightID: 0, // ID of light and it's bling being spawned
                canvas: "",
                ctx: "",
                defaultCanvasWidth: 500,
                defaultCanvasHeight: 500,
                defaultCanvasLength: 708, // width at 45deg
                boundingBoxPadding: 55, // padding for light and bling positioning within the canvas
                spawnRate: 68, // spawn a new object every 1500ms
                spawnRateOfFade: 0.005, // set how fast the lights will fall
                lastSpawn: -1, // when was the last object spawned
                lights: [], // this array holds all spawned lights
                numLightInstances: 5, // number of light instance to create every spawn
                randomLightRadius: 0, // holds the random radius that the lights will get on page load
                minLightRadius: 1, // initial min light radius
                maxLightRadius: 14, // intial max light radius
                blings: [], // this array holds all spawned blings
                maxBlingGrowRadius: 18, // max size the bling radius is allowed to grow
                blingRadiusGrowRate: 0.2, // rate at which the bling radius will grow
                blingRadiusAccRateIncrease: 0.025, // this is used to increment the speed of the bling
                blingRadius: 16, // start bling radius
                blingSpeed: 0.17, // bling speed
                blingAcceleration: 0, // bling acceleration
                blingStrokeWidth: 3 // bling stroke width
            }
        },
        methods: {
            /* Initialize */
            init: function() {
                this.randomLightRadius = this.getRandomNumber(this.minLightRadius, this.maxLightRadius);
                this.resize();
                this.run();

                /* Events */
                window.addEventListener("load", this.init);
                window.addEventListener("resize", this.resize);
            },
            /* Resize */
            resize: function() {
                if(window.innerWidth < this.defaultCanvasLength) {
                    console.log("tick");
                    this.canvas.width = window.innerWidth / this.canvas.getBoundingClientRect().width * this.canvas.width;
                    this.canvas.height = this.canvas.width;
                }else{
                    this.canvas.width = this.defaultCanvasWidth;
                    this.canvas.height = this.defaultCanvasHeight;
                }
            },
            /* Enter frame */
            run: function() {
                // get the elapsed time
                var time = Date.now();

                // see if its time to spawn a new object
                if(time > (this.lastSpawn + this.spawnRate)) {
                    this.lastSpawn = time;
                    
                    // to get the effect I want (multiple lights spawning at the same time on each spawn)
                    for(var i=0; i<this.numLightInstances; i++) {
                        this.spawnNewLight();
                    }
                }

                // request another animation frame
                requestAnimationFrame(this.run);

                // clear the canvas so all lights can be 
                // redrawn in new positions
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

                // will store our active lights
                let lightsActive = [];

                // loop over each light, draw and animate
                for(var i = 0; i < this.lights.length; i++){
                    var light = this.lights[i];
                    this.ctx.beginPath();
                    this.ctx.arc(light.x, light.y, light.radius, 0, Math.PI*2);
                    this.ctx.closePath();
                    this.ctx.fillStyle = "rgba("+light.bkgdColor.r+", "+light.bkgdColor.g+", "+light.bkgdColor.b+", "+light.bkgdColor.a+")";
                    this.ctx.fill();

                    // if light has faded
                    if(light.bkgdColor.a > 0) {
                        // add to array of keepers
                        lightsActive.push(light);
                        // keep fading it out
                        light.bkgdColor.a -= this.spawnRateOfFade;
                    }
                }

                // reset lights array to contain only active lights
                this.lights = lightsActive;

                // will store our active blings
                let blingsActive = [];
                
                // loop over each bling, draw and animate
                for(var j = 0; j < this.blings.length; j++){
                    var bling = this.blings[j];
                    this.ctx.beginPath();
                    this.ctx.arc(bling.x, bling.y, bling.radius, 0, Math.PI*2);
                    this.ctx.strokeStyle = "rgba("+bling.bkgdColor.r+", "+bling.bkgdColor.g+", "+bling.bkgdColor.b+", "+bling.bkgdColor.a+")";
                    this.ctx.lineWidth = bling.blingStrokeWidth;
                    this.ctx.stroke();

                    // if light has faded
                    if(bling.bkgdColor.a > 0) {
                        // add to array of keepers
                        blingsActive.push(bling);
                        // keep fading it out
                        bling.bkgdColor.a -= this.spawnRateOfFade;
                    }

                    // if radius has grown to the max size then animate position with acceleration
                    if(bling.radius < this.maxBlingGrowRadius) {
                        bling.radius += this.blingRadiusGrowRate;
                    }else{
                        bling.x -= bling.speed * bling.acceleration;
                        bling.y -= bling.speed * bling.acceleration;
                        bling.acceleration += this.blingRadiusAccRateIncrease;
                    }
                }

                // reset lights array to contain only active lights
                this.blings = blingsActive;

            },
            /* Create new light and it's fellow bling */
            spawnNewLight: function() {
                if(!this.isHomePage) {
                    return;
                }

                this.curLightID++;

                // set up
                let x = this.getRandomNumber(this.boundingBoxPadding, this.canvas.offsetWidth - this.boundingBoxPadding);
                let y = this.getRandomNumber(this.boundingBoxPadding, this.canvas.offsetHeight - this.boundingBoxPadding);
                let bgColor = this.getRandomRGBColor();

                // store a light
                let light = {
                    bkgdColor: Object.assign({}, bgColor),
                    x: x,
                    y: y,
                    radius: this.randomLightRadius,
                    id: this.curLightID
                } 

                this.lights.push(light);

                // store a bling
                let bling = {
                    bkgdColor: Object.assign({}, bgColor),
                    x: x,
                    y: y,
                    radius: this.blingRadius,
                    speed: this.blingSpeed,
                    acceleration: this.blingAcceleration,
                    blingStrokeWidth: this.blingStrokeWidth,
                    id: this.curLightID
                }

                this.blings.push(bling);
            },
            /* Creates a random number with a range of 2 numbers */
            getRandomNumber: function(min, max) {
                return Math.floor(Math.random()*(max-min+1)+min);
            },
            /* Returns a random HEX color */
            getRandomColor: function() {
                return '#'+Math.floor(Math.random()*16777215).toString(16);
            },
            /* Returns a random RGBA color object */
            getRandomRGBColor: function() {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
                let alpha = Math.random()-0.2;
                let rgbObj = {r: red, g: green, b: blue, a: alpha};
                return rgbObj;
            },
        },
        computed: {
            ...mapState({
                brightenLights: state => state.navLinkIsHovered,
                currentPageName: state => state.currentPageName
            }),
            isHomePage: function() {
                return this.currentPageName == "home";
            }
        },
        mounted() {
            this.canvas = document.getElementById("light-box-canvas");
            this.ctx = this.canvas.getContext("2d");

            this.init();
        }
    }
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
</style>