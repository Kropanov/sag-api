import { BcryptService } from '@app/libs/bcrypt';
import { AuthService } from '@app/modules/auth';
import { UsersService } from '@app/modules/users';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

import { AuthController } from './auth.controller';

describe('AuthController', () => {
    let controller: AuthController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                JwtModule.register({
                    secret: 'test-secret',
                    signOptions: { expiresIn: '1h' },
                }),
            ],
            controllers: [AuthController],
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

        controller = module.get<AuthController>(AuthController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
