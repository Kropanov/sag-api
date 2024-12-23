import { MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { PlayersService } from '../services/players.service';

@WebSocketGateway()
export class PlayersGateway {
    constructor(private readonly playersService: PlayersService) {}

    @SubscribeMessage('createPlayer')
    create(@MessageBody() createPlayerDto: CreatePlayerDto) {
        return this.playersService.create(createPlayerDto);
    }

    @SubscribeMessage('findAllPlayers')
    findAll() {
        return this.playersService.findAll();
    }

    @SubscribeMessage('findOnePlayer')
    findOne(@MessageBody() id: number) {
        return this.playersService.findOne(id);
    }

    @SubscribeMessage('updatePlayer')
    update(@MessageBody() updatePlayerDto: UpdatePlayerDto) {
        return this.playersService.update(updatePlayerDto.id, updatePlayerDto);
    }

    @SubscribeMessage('removePlayer')
    remove(@MessageBody() id: number) {
        return this.playersService.remove(id);
    }
}
