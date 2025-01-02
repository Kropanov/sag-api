import { Injectable } from '@nestjs/common';

import { CreatePlayerDto } from '../dto/create-player.dto';

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

    joined(createPlayerDto: CreatePlayerDto, clientId: string) {
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

    getAllPlayers() {
        const playersArray = Array.from(this.players.entries()).map(([clientId, playerData]) => ({
            clientId,
            ...playerData,
        }));
        console.log();

        console.log('All players:', playersArray);

        return playersArray;
    }

    move(data: any, clientId: string) {
        console.log(clientId);
        const player = this.players.get(clientId);

        if (player) {
            player.state.position.x = data.x;
            player.state.position.y = data.y;
        }

        return { clientId, player };
    }

    remove(clientId: string) {
        this.players.delete(clientId);
    }
}
