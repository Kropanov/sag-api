import { PlayerEvents, PlayerResponseEvents } from '@app/enums';
import { PlayerActionRequestDTO, PlayerJoinDTO } from '@app/modules/players/dto';
import {
    ConnectedSocket,
    MessageBody,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { PlayersService } from '../services/players.service';

@WebSocketGateway(5000, { cors: { origin: process.env.CLIENT_URL || 'http://localhost:5173' } })
export class PlayersGateway implements OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    constructor(private readonly playersService: PlayersService) {}

    handleDisconnect(client: Socket) {
        this.playersService.remove(client.id);
        this.server.send({ type: PlayerResponseEvents.LEFT, data: { clientId: client.id } });
    }

    @SubscribeMessage(PlayerEvents.JOIN)
    handlePlayerJoin(@MessageBody() body: PlayerJoinDTO, @ConnectedSocket() client: Socket) {
        const player = this.playersService.add(body, client.id);
        this.server.send({ type: PlayerResponseEvents.JOINED, data: player });
    }

    @SubscribeMessage(PlayerEvents.GET_ALL)
    getAllPlayers() {
        return this.playersService.getAll();
    }

    @SubscribeMessage(PlayerEvents.ACTION)
    broadcastPlayerAction(@MessageBody() body: PlayerActionRequestDTO, @ConnectedSocket() client: Socket) {
        // Save current player position
        this.playersService.update(body, client.id);

        this.server.send({
            type: PlayerResponseEvents.ACTION_PERFORMED,
            data: {
                action: body.action,
                keyCode: body.keyCode,
                clientId: client.id,
            },
        });
    }
}
