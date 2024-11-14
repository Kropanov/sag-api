import { AuthService } from '@app/modules/auth/auth.service';
import { LoginRequestDTO } from '@app/modules/auth/dto/login-request.dto';
import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() body: LoginRequestDTO) {
        const { username, password } = body;
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return this.authService.login(user);
    }

    @Post('signup')
    async signup() {
        // TODO: implement logic...
    }
}
