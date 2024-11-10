import { PrismaModule } from '@app/libs/prisma';
import { ItemsModule } from '@app/modules/items/items.module';
import { UsersModule } from '@app/modules/users';
import { Module } from '@nestjs/common';

@Module({
    imports: [PrismaModule, UsersModule, ItemsModule],
    providers: [],
})
export class AppModule {}
