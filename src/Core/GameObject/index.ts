import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Group } from 'three';

type TScripts = IScript[];

interface IScript {
    gameObject: Group;
    update: () => void;
}

export abstract class GameObject {
    private _scripts: TScripts = [];

    private _gameObject = new Group();

    protected async loadFBX(path: any) {
        const loader = new FBXLoader();
        const FBX = await loader.loadAsync(path);

        this.gameObject.add(FBX);
    }

    protected addScripts(Scripts: TScripts) {
        Scripts.forEach((script) => {
            this._scripts.push(script);
        });
    }

    public get gameObject() {
        return this._gameObject;
    }

    public update() {
        this._scripts.forEach((script) => script.update());
    }
}
