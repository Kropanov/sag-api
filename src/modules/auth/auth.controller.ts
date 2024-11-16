import { AuthService } from '@app/modules/auth/auth.service';
import { LoginRequestDTO } from '@app/modules/auth/dto/login-request.dto';
import { SignupRequestDTO } from '@app/modules/auth/dto/signup-request.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller({ path: 'auth', version: '1' })
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() body: LoginRequestDTO) {
        const user = await this.authService.validateUser(body.email, body.password);

        return this.authService.login(user);
    }

    @Post('signup')
    async signup(@Body() body: SignupRequestDTO) {
        const user = await this.authService.registerUser(body.email, body.password);

        return this.authService.login(user);
    }
}
