const request=require('supertest')
const app=require('./app')
describe("todos api",()=>{
    test('get /todos ---->array todos',()=>{
        return request(app).get("/todos").expect("Content-Type",/json/).expect(200).then((response)=>{
            console.log(response)
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    name:expect.any(String),
                    completed:expect.any(Boolean)
                })
            ]))
        })
    })
    test("get todos/id ---->get single todo",()=>{
        return request(app).get("/todos/1").expect("Content-Type",/json/).expect(200).then((response)=>{
            expect(response.body).toEqual(
                expect.objectContaining({
                    name:expect.any(String),
                    completed:expect.any(Boolean)
                })
            )
        })
    })
    test("post todo ---->add todos",()=>{
        return request(app).post("/todos/add").expect("Content-Type",/json/).expect(200).then((response)=>{
            expect(response.body).toEqual(
                expect.objectContaining({
                    name:expect.any(String),
                    completed:expect.any(Boolean)
                })
            )
        })
    })
})
