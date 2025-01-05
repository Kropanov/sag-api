import { Injectable } from '@nestjs/common';

import { PlayerJoinDTO } from '../dto/create-player.dto';

export interface PlayerState {
    position: { x: number; y: number };
    health: number;
    // inventory: Item[];
}

// interface Item {
//     id: string;
//     name: string;
//     quantity: number;
//     rarity: string;
// }

export interface Player {
    id: string;
    name: string;
    state: PlayerState;
}

@Injectable()
export class PlayersService {
    private players = new Map<string, Player>();

    // TODO: dto and main logic of the method
    add(createPlayerDto: PlayerJoinDTO, clientId: string) {
        const player = {
            id: createPlayerDto.id,
            name: 'username',
            state: {
                position: { x: 0, y: 0 },
                health: 100,
            },
        };

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
        this.players.delete(clientId);
    }
}
