import { Module } from '@nestjs/common';

import { PlayersGateway } from './gateways/players.gateway';
import { PlayersService } from './services/players.service';

@Module({
    providers: [PlayersGateway, PlayersService],
})
export class PlayersModule {}
