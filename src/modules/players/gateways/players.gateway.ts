import {
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { PlayersService } from '../services/players.service';

@WebSocketGateway(5000, { cors: { origin: process.env.CLIENT_URL || 'http://localhost:5173' } })
export class PlayersGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    constructor(private readonly playersService: PlayersService) {}

    handleConnection(client: any) {
        console.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: any) {
        console.log(`Client disconnected: ${client.id}`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    afterInit(_server: any): any {
        console.log('WebSocket Server Initialized');
    }

    @SubscribeMessage('joined')
    create(@MessageBody() createPlayerDto: CreatePlayerDto) {
        console.log('id:', createPlayerDto.id);

        // send message to clients
        // this.server.send({ type: 'create', data: 123 });
        console.log();
        const newPlayer = this.playersService.joined(createPlayerDto);
        this.server.send({ type: 'new_player', data: newPlayer });
    }

    @SubscribeMessage('findAllPlayers')
    findAll() {
        const data = this.playersService.getPlayers();

        this.server.send(data);
    }

    @SubscribeMessage('move')
    findOne(@MessageBody() data: any) {
        return this.playersService.move(data);
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
