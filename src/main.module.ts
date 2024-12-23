import { BcryptModule } from '@app/libs/bcrypt/bcrypt.module';
import { PrismaModule } from '@app/libs/prisma';
import { AuthModule } from '@app/modules/auth/auth.module';
import { ItemsModule } from '@app/modules/items/items.module';
import { PlayersModule } from '@app/modules/players/players.module';
import { UsersModule } from '@app/modules/users';
import { Module } from '@nestjs/common';

@Module({
    imports: [PrismaModule, AuthModule, UsersModule, ItemsModule, BcryptModule, PlayersModule],
    providers: [],
})
export class AppModule {}
