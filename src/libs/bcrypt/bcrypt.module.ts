import { Global, Module } from '@nestjs/common';

import { BcryptService } from './bcrypt.service';

@Global()
@Module({
    providers: [BcryptService],
})
export class BcryptModule {}
