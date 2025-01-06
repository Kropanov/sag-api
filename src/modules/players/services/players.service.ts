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
            ...playerData,
        }));
    }

    remove(clientId: string) {
        return this.players.delete(clientId);
    }
}
