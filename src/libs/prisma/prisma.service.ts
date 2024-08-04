import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { HealthCheckInterface } from 'src/interfaces/health-check';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, HealthCheckInterface, OnModuleDestroy {
    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

    checkHealth(): Promise<void> {
        return this.$queryRawUnsafe('SELECT 1;');
    }
}
