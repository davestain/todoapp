process.env.NODE_ENV = "test";
import request from 'supertest';
import app from '../index';


describe('/GET Test Collection', () => {
    it('should bring all items from DB',async()=>{

        const res = await request(app)
        .get('/tasks');

        expect(res.statusCode).toBe(200);

    })
})
