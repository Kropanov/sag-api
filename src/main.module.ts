import { PrismaModule } from '@app/libs/prisma';
import { UsersModule } from '@app/modules/users';
import { Module } from '@nestjs/common';

@Module({
    imports: [PrismaModule, UsersModule],
    providers: [],
})
export class AppModule {}
