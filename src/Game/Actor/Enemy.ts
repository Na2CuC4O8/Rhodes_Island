import Actor from "./Actor";
import {Vec2} from "../../Common/DodMath";
import {Pos} from "./ActorModules/Position";
import Oprt from "./Oprt";
import {AtkStateMachine} from "./ActorModules/AtkAbst";

export class Enemy extends Actor {

    public pos: Pos = new Pos();//质点模块
    public correspondedPath: Vec2[];//仅用于存储相关的路径的指针
    public pathSegCount: number;//目前正在朝此路径的哪个点前进

    /**
     * by XWV
     */
    public readonly state: AtkStateMachine = new AtkStateMachine(this);


    constructor() {
        super();
    }

    public onBlock(oprt: Oprt) {//阻挡函数
        this.profile.blocked = true;
        this.profile.blocker = oprt;
    }

    public onRelease() {//解除阻挡函数
        this.profile.blocked = false;
        this.profile.blocker = null;
    }

    /**
     * by XWV
     */
    public move() {
        this.pos.move();//修改敌人位置
        this.grid.pos(this.pos.data.x, this.pos.data.y);//修改敌人碰撞箱位置
        this.seeker.followActor();//目标选择器跟随自身移动
        this.grid.event(this, this.identity);//发布碰撞事件
    }
}