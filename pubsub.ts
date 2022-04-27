interface CallBackFunc {
    (data: any): any
}


export default class PubSub {
    private static events = {};

    constructor() {};

    public static subscribe(eventName : string, callback : CallBackFunc) {
        PubSub.events[eventName] = PubSub.events[eventName] || [];
        PubSub.events[eventName].push(callback); 
    }

    public static unsubscribe() {

    }

    public static publish(eventName : string, data : any) {
        if(PubSub.events[eventName]) {
            PubSub.events[eventName].forEach(fun => {
                fun(data);
            });
        }
    }

}