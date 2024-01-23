export const add=(a,b)=>{
    return a+b
}
export const myFunction=(input)=>{
    if(typeof input!=='number'){
        throw new Error("Invalid Input")
    }
}
export function fetch(callback){
    setTimeout(()=>{
        callback('peanut butter')
    },1000)
}  
export function fetchPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('peanut butter')
        },1000)
    })
}

//mock functions in jest--->used to mock DB calls
test('mock implementation of a basic function',()=>{
    const mock = jest.fn(x=>42+x)
    expect(mock(1)).toBe(43)
})

//spyOn function in jest

//TDD
export const multiple=(num)=>{
    if(num%3===0) return "fizz" 
}