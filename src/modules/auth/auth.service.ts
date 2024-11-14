import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        const accessToken = await this.jwtService.signAsync(payload);

        return {
            accessToken,
        };
    }

    async validateUser(username: string, password: string) {
        if (username === 'test' && password === 'test') {
            return { userId: 1, username };
        }

        return null;
    }
}
