import { BcryptService } from '@app/libs/bcrypt';
import { UsersService } from '@app/modules/users';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
    let authService: AuthService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                JwtModule.register({
                    secret: 'test-secret',
                    signOptions: { expiresIn: '1h' },
                }),
            ],
            providers: [
                AuthService,
                {
                    provide: UsersService,
                    useValue: {
                        findOneByName: jest.fn(),
                        create: jest.fn(),
                    },
                },
                {
                    provide: BcryptService,
                    useValue: {
                        compare: jest.fn(),
                        hash: jest.fn(),
                    },
                },
            ],
        }).compile();

        authService = module.get<AuthService>(AuthService);
    });

    it('should be defined', () => {
        expect(authService).toBeDefined();
    });

    // Добавьте остальные тесты
});
