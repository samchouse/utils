import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  public canActivate(context: ExecutionContext) {
    const { headers } = context.switchToHttp().getRequest();
    return headers['x-api-key'] === process.env['API_KEY'];
  }
}
