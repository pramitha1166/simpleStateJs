function hello(text: any) {
    console.log(text)
}
hello("react-hook-tool")

const target= {
    message1: "Hello",
    message2: "Everyone"
} 

const handler = {
    get(target, prop, reveiver) {
        return "Worlds";
    }
}

const proxy1 = new Proxy(target, handler);

console.log(proxy1.message1)
console.log(proxy1.message2)