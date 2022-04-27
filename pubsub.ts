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

    public static unsubscribe(eventName : string, callback : CallBackFunc) {
        if(PubSub.events[eventName]) {
            for (let i=0; i < PubSub.events[eventName].length; i++) {
               if(PubSub.events[eventName][i]===callback) {
                   PubSub.events[eventName].splice(i, 1);
               }
            }
        }
    }

    public static publish(eventName : string, data : any) {
        if(PubSub.events[eventName]) {
            PubSub.events[eventName].forEach(function(fn: CallBackFunc) {
                fn(data);
            });
        }
    }

}