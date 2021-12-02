import {
    PerspectiveCamera, Scene, WebGLRenderer, Group,
} from 'three';

export interface IGameEngineProps {
    camera?: {
        fov: number;
        aspect: number;
        near: number;
        far: number;
    },
    renderer?: {
        domElement: HTMLElement;
        antialias: boolean;
        width: number;
        height: number;
    }
}

interface IGameObject {
    gameObject: Group;
    update: () => void;
}

interface IGameLoop {
    currentTime: number;
    deltaTime: number;
    fps: number;
}

export abstract class GameEngine {
    private previousTime = 0;

    protected readonly width: number;

    protected readonly height: number;

    protected readonly gameObjects: IGameObject[] = [];

    protected readonly scene: Scene;

    protected readonly renderer: WebGLRenderer;

    protected readonly camera: PerspectiveCamera;

    constructor({
        camera = {
            fov: 75,
            aspect: window.innerWidth / window.innerHeight,
            near: 0.1,
            far: 100000,
        },
        renderer = {
            domElement: document.body,
            antialias: true,
            width: window.innerWidth,
            height: window.innerHeight,
        },
    }: IGameEngineProps) {
        this.width = renderer.width;
        this.height = renderer.height;

        this.scene = new Scene();
        this.renderer = new WebGLRenderer({ antialias: renderer.antialias });
        this.camera = new PerspectiveCamera(camera.fov, camera.aspect, camera.near, camera.far);

        renderer.domElement.appendChild(this.renderer.domElement);

        this.renderer.setSize(renderer.width, renderer.height);
        this.renderer.setClearColor(0x000000, 1);

        this.camera.position.set(0, 250, 500);
        this.camera.lookAt(0, 0, 0);
    }

    public start() {
        requestAnimationFrame(this.update.bind(this));
    }

    protected addGameObjects(gameObjects: IGameObject[]) {
        gameObjects.forEach((gameObject) => {
            this.gameObjects.push(gameObject);
            this.scene.add(gameObject.gameObject);
        });
    }

    private update(currentTime: number) {
        const deltaTime = (currentTime - this.previousTime) / 1000;
        this.previousTime = currentTime;

        const fps = 1 / deltaTime;

        this.gameObjects.forEach((gameObject) => {
            gameObject.update();
        });

        this.gameLoop({ currentTime, deltaTime, fps });

        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(this.update.bind(this));
    }

    protected abstract gameLoop({ currentTime, deltaTime, fps }: IGameLoop): void;
}
