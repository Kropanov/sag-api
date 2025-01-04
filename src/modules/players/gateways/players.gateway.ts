import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { CreatePlayerDto } from '../dto/create-player.dto';
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
        this.playersService.remove(client.id);
        this.server.send({ type: 'player_leave', data: { clientId: client.id } });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    afterInit(_server: any): any {
        console.log('WebSocket Server Initialized');
    }

    @SubscribeMessage('joined')
    create(@MessageBody() createPlayerDto: CreatePlayerDto, @ConnectedSocket() client: Socket) {
        console.log('id:', createPlayerDto.id);
        console.log('clientid:', client.id);

        // send message to clients
        // this.server.send({ type: 'create', data: 123 });
        console.log();
        const newPlayer = this.playersService.joined(createPlayerDto, client.id);
        this.server.send({ type: 'new_player', data: newPlayer });
    }

    @SubscribeMessage('findAllPlayers')
    findAll() {
        const data = this.playersService.getAllPlayers();

        return [...data];
    }

    @SubscribeMessage('move')
    findOne(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
        const player = this.playersService.move(data, client.id);

        this.server.send({ type: 'move', data: player });
    }

    @SubscribeMessage('playerAction')
    remove(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
        this.server.send({
            type: 'player_move',
            data: { action: data.action, keyCode: data.keyCode, clientId: client.id },
        });
    }
}
