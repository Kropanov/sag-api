import { Test, TestingModule } from '@nestjs/testing';

import { PlayersService } from '../services/players.service';
import { PlayersGateway } from './players.gateway';

describe('PlayersGateway', () => {
    let gateway: PlayersGateway;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PlayersGateway, PlayersService],
        }).compile();

        gateway = module.get<PlayersGateway>(PlayersGateway);
    });

    it('should be defined', () => {
        expect(gateway).toBeDefined();
    });
});
