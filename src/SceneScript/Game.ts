import {ui} from "../ui/layaMaxUI";
import RhodesGame from "../Rhodes_Game/RhodesGame";


export default class Game extends ui.GameSceneUI {
    public static UISet: Laya.Sprite;
    public static stage: Laya.Stage;
    private _pause: boolean = false;


    private rhodes: RhodesGame;

    //全局数据（数据库类完成后将被替代）
    public static frameLength: number = 20;//帧长度

    constructor() {
        super();

        let centre = new Laya.EventDispatcher();


        this.rhodes = RhodesGame.getInstance();
        // Laya.timer.loop(20,this,this.update);
    }

    private update(): void {
        // this.rhodes.update();
    }
}

