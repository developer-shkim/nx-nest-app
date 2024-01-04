import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetHelloService, MyNestLibModule } from '@my-workspace/my-nest-lib';
import { GetWorldService, MyNestLib2Module } from '@my-workspace/my-nest-lib-2';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [MyNestLibModule, MyNestLib2Module],
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({ message: 'Hello API' });
    });
  });

  describe('getHello', () => {
    it('should call GetHelloService.getHello', () => {
      const appController = app.get<AppController>(AppController);
      const getHelloService = app.get<GetHelloService>(GetHelloService);
      const getHello = jest
        .spyOn(getHelloService, 'getHello')
        .mockImplementation(() => 'hello');

      appController.getHello();

      expect(getHello).toHaveBeenCalled();
    });
  });

  describe('getWorld', () => {
    it('should call GetWorldService.getWorld', () => {
      const appController = app.get<AppController>(AppController);
      const getWorldService = app.get<GetWorldService>(GetWorldService);
      const getWorld = jest
        .spyOn(getWorldService, 'getWorld')
        .mockImplementation(() => 'world');

      appController.getWorld();

      expect(getWorld).toHaveBeenCalled();
    });
  });
});
