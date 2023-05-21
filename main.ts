// Promis test


async function Greeting(name: string): Promise<number> {
    console.log('Greeting start'); // 3
    const hour = new Date().getHours();
    if( hour < 12 ){
        console.log(`Hello, ${name}`); 
    }else{
        return Promise.reject(new Error('too late'));
    }

    return Promise.resolve(hour);
}

await Greeting('Seiji').then((res) => {
        console.log(res);
        return Number(res)*2;
    }).then((res) => {
        console.log(res);
        return Promise.resolve(res*2); // resolveされたPromiseを返しています
    }).then((res) => {
        console.log(res); //: resolveされた値で`then`が呼び出されます
        return res*2;
    }).catch((err) => {
        console.log(err);
    });

console.log('global end'); // 1
