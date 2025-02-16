import { BcryptModule } from '@app/libs/bcrypt';
import { PrismaModule } from '@app/libs/prisma';
import { AuthModule } from '@app/modules/auth';
import { ItemsModule } from '@app/modules/items/items.module';
import { PlanetModule } from '@app/modules/planet';
import { PlayersModule } from '@app/modules/players/players.module';
import { UsersModule } from '@app/modules/users';
import { WorldsModule } from '@app/modules/worlds/worlds.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        PrismaModule,
        AuthModule,
        UsersModule,
        ItemsModule,
        BcryptModule,
        PlayersModule,
        WorldsModule,
        PlanetModule,
    ],
    providers: [],
})
export class AppModule {}
