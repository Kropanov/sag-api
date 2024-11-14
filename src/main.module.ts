import { PrismaModule } from '@app/libs/prisma';
import { AuthModule } from '@app/modules/auth/auth.module';
import { ItemsModule } from '@app/modules/items/items.module';
import { UsersModule } from '@app/modules/users';
import { Module } from '@nestjs/common';

@Module({
    imports: [PrismaModule, AuthModule, UsersModule, ItemsModule],
    providers: [],
})
export class AppModule {}
