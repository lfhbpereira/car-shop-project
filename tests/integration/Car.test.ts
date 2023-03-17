import { expect } from 'chai';
import { Model } from 'mongoose';
import request from 'supertest';
import sinon from 'sinon';

import { carInput, carOutput, carsOutput } from './mocks/CarMock';
import app from '../../src/app';

describe('Test /cars', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('POST with create', function () {
    it('should create a new car', async function () {
      sinon.stub(Model, 'create').resolves(carOutput);

      const { status, body } = await request(app).post('/cars').send(carInput);

      expect(status).to.equal(201);
      expect(body).to.deep.equal(carOutput);
    });
  });

  describe('GET with getAll', function () {
    it('should get all cars', async function () {
      sinon.stub(Model, 'find').resolves(carsOutput);

      const { status, body } = await request(app).get('/cars');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(carsOutput);
    });
  });

  describe('GET with getById', function () {
    it('should get a car by id', async function () {
      sinon.stub(Model, 'findOne').resolves(carOutput);

      const { status, body } = await request(app).get('/cars/64138a0ae4bb63b7dadbbfa2');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(carOutput);
    });
  });

  describe('PUT with update', function () {
    it('should update a car by id', async function () {
      sinon.stub(Model, 'findOneAndUpdate').resolves(carOutput);

      const { status, body } = await (
        request(app).put('/cars/64138a0ae4bb63b7dadbbfa2').send(carInput)
      );

      expect(status).to.equal(200);
      expect(body).to.deep.equal(carOutput);
    });
  });
});
