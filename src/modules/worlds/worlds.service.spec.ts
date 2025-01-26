import { Test, TestingModule } from '@nestjs/testing';

import { WorldsService } from './worlds.service';

describe('WorldsService', () => {
    let service: WorldsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [WorldsService],
        }).compile();

        service = module.get<WorldsService>(WorldsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
