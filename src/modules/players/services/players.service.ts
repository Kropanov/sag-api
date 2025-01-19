import { PlayerActionRequestDTO } from '@app/modules/players/dto/player-action-request.dto';
import { Injectable } from '@nestjs/common';

import { PlayerJoinDTO } from '../dto/player-join.dto';

@Injectable()
export class PlayersService {
    private players = new Map<string, PlayerJoinDTO>();

    add(player: PlayerJoinDTO, clientId: string) {
        this.players.set(clientId, player);

        return { clientId, player };
    }

    getAll() {
        return Array.from(this.players.entries()).map(([clientId, playerData]) => ({
            clientId,
            player: { ...playerData },
        }));
    }

    remove(clientId: string) {
        return this.players.delete(clientId);
    }

    update(body: PlayerActionRequestDTO, clientId: string) {
        const player = this.players.get(clientId);

        if (player) {
            this.players.set(clientId, {
                userId: player.userId,
                username: player.username,
                state: {
                    health: player.state.health,
                    position: {
                        x: body.position.x,
                        y: body.position.y,
                    },
                },
            });
        }
    }
}
