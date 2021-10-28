import { Test, TestingModule } from '@nestjs/testing';
import { BuildsController } from './builds.controller';
import { BuildsService } from './builds.service';

describe('BuildsController', () => {
  let controller: BuildsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildsController],
      providers: [BuildsService]
    }).compile();

    controller = module.get<BuildsController>(BuildsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
