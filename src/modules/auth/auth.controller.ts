import { LoginRequestDTO, SignupRequestDTO } from '@app/modules/auth/dto';
import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller({ path: 'auth', version: '1' })
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() body: LoginRequestDTO) {
        const user = await this.authService.validateUser(body.name, body.password);

        return this.authService.login(user);
    }

    @Post('signup')
    async signup(@Body() body: SignupRequestDTO) {
        const user = await this.authService.registerUser(body.name, body.password);

        return this.authService.login(user);
    }
}
