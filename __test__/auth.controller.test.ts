import app from "../src/app";
import {Request} from "supertest";
import request from 'supertest';
import sinon from 'sinon';
import User, {IUser} from "../src/models/User";

describe("Auth Controller test", () => {
    afterEach(() => {
        sinon.restore()
    })

    test("first test", async () => {

        sinon.mock(User).expects('save')
        
        const result = await request(app).post("/api/auth/signup");
        console.log(result)
    })
})