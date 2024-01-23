import {add,myFunction,fetch,fetchPromise,multiple} from './custom.js'
/*

Matchers:-
1. toBe()    ---->Used to run tests for primitives types like Int,String,Boolean. Not for checking objects and arrays
2. toEqual() ---->Used to run tests for objects and arrays
3. toBeFalsy() ---->Used to check falsy values in a test
4. toBeTruthy() ---->Used to check truthy values in a test

*/

test('add 1+2=3',()=>{
    //we use toBe() if we want to compare primitive values like Int,string and boolean,
    //for example,here 2+2=4,which is primitive value.
    //toBe will not work for objects and arrays comparison[they are not primitive]
    expect(add(1,2)).toBe(3);
})
test('Object assignment',()=>{
    const data={one:1}
    data['two']=2
    //We use toEqual to compare, objects and arrays
    expect(data).toEqual({one:1,two:2})
})
test('falsy check',()=>{
    //toBeFalsy and toBeTruthy are used to check boolean
    const n=null;
    expect(n).toBeFalsy()
})
test('truthy',()=>{
    const n=1
    expect(n).toBeTruthy()
})

//Error handling in tests
test("throws error on invalid input",()=>{
    expect(()=>{
        myFunction('5')
    }).toThrow()
})

//Testing asynchronous code
test("Testing asynchrounous code",(done)=>{
    /*
     done is a callback that Jest provides for handling asynchronous code. When you're testing asynchronous code, Jest needs a way to know when the test is complete. By calling done() in your test, you're telling Jest that Jest should wait for this callback to be called before finishing the test.
    */
    function callback(data){
        try{
            expect(data).toBe('peanut butter')
            done();
        }catch(err){
            done(error)
        }
    }
    fetch(callback)
})
test("fetch promise",()=>{
    fetchPromise().then(data => {
        expect(data).toBe('peanut butter');
    });
})
test("fetch using async",async()=>{
   const data=await fetchPromise()
   expect(data).toBe("peanut butter")
})

//TDD
test("checking fizz printing",()=>{
    const result=multiple(42)
    expect(result).toBe("fizz")
})