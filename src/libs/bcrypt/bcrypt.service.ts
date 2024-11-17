import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
    saltRounds = 10;

    async hash(plainTextPassword: string): Promise<string> {
        try {
            return await bcrypt.hash(plainTextPassword, this.saltRounds);
        } catch (err) {
            throw new Error(err);
        }
    }

    async compare(plainTextPassword: string, hash: string): Promise<boolean> {
        try {
            return await bcrypt.compare(plainTextPassword, hash);
        } catch (err) {
            throw new Error(err);
        }
    }
}
