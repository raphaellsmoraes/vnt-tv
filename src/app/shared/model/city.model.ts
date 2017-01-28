export class City {
    private name: string;
    private state: string;
    private active: boolean = false;

    constructor(name: string, state: string, active?: boolean){
        this.name = name;
        this.state = state;
        this.active = active;
    }
}