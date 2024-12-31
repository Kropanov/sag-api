import { Injectable } from '@nestjs/common';

import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';

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

    joined(createPlayerDto: CreatePlayerDto) {
        const player = {
            id: createPlayerDto.id,
            name: 'username',
            state: {
                position: { x: 0, y: 0 },
                health: 100,
            },
        };

        this.players.set(createPlayerDto.id, player);

        return { player };
    }

    getPlayers() {
        return `This action returns all players`;
    }

    move(data: any) {
        this.players.set(data.id, {
            id: data.id,
            name: data.name,
            state: {
                position: { x: data.x, y: data.y },
                health: data.health,
            },
        });

        const player = this.players.get(data.id);

        if (player) {
            player.state.position.x = data.velocity.x;
            player.state.position.y = data.velocity.y;
        }

        console.log(player);

        return `This player's moving`;
    }

    update(id: string, updatePlayerDto: UpdatePlayerDto) {
        return `This action updates a #${id} player ${updatePlayerDto}`;
    }

    remove(id: number) {
        return `This action removes a #${id} player`;
    }
}
