import { BcryptService } from '@app/libs/bcrypt/bcrypt.service';
import { UsersService } from '@app/modules/users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService,
        private bcryptService: BcryptService,
    ) {}

    async login(user: any) {
        const payload = { email: user.email, sub: user.id };
        const authToken = await this.jwtService.signAsync(payload);

        return {
            authToken,
        };
    }

    async validateUser(email: string, plainTextPassword: string) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            // FIXME: change to avoid hints for hacking purposes
            throw new UnauthorizedException('User not found.');
        }

        const isPasswordValid = await this.bcryptService.compare(plainTextPassword, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials.');
        }

        return user;
    }

    async registerUser(email: string, plainTextPassword: string) {
        const encryptedPassword = await this.bcryptService.hash(plainTextPassword);

        return this.usersService.create({ email, password: encryptedPassword });
    }
}
