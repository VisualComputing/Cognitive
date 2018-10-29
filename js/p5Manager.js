class p5Manager {

    constructor() {
        this.instances = [];
    }

    // Add a new p5 instance to manager
    add(cP5) {
        this.instances.push(cP5);
    }

    run(canvas) {
        const instance = this.instances[canvas.id];
        if (instance && instance._loopOriginal)
            instance.loop();
    }

    stop(canvas) {
        const instance = this.instances[canvas.id];
        if (instance)
            instance.noLoop();
    }

    initialize(activeCanvases) {
        const instances = this.instances.slice(0);
        this.instances = [];
        for (let instance of instances) {
            // Change index of instances to canvas id
            this.instances[instance.canvas.id] = instance;
            // Stores original value of _loop
            instance._loopOriginal = instance._loop;
            // Stops inactive canvases
            for (let c of activeCanvases) {
                if (c.id !== instance.canvas.id) {
                    this.stop(instance);
                    break;
                }
            }
        }
    }

    runCanvases(canvases) {
        for (let canvas of canvases) {
            this.run(canvas);
        }
    }

    stopCanvases(canvases) {
        for (let canvas of canvases) {
            this.stop(canvas);
        }
    }

}