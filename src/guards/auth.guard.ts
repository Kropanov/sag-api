// TODO: if add google or whatever a new auth option
// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
//
// import { GoogleAuthGuard } from './google-auth.guard';
// import { JwtAuthGuard } from './jwt-auth.guard';
//
// @Injectable()
// export class AnyAuthGuard implements CanActivate {
//     constructor(
//         private jwtAuthGuard: JwtAuthGuard,
//         private googleAuthGuard: GoogleAuthGuard,
//     ) {}
//
//     async canActivate(context: ExecutionContext): Promise<boolean> {
//         const jwtAuthResult = await this.jwtAuthGuard.canActivate(context);
//         const googleAuthResult = await this.googleAuthGuard.canActivate(context);
//
//         return jwtAuthResult || googleAuthResult;
//     }
// }
