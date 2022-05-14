import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { FastifyRequest } from 'fastify';

@Injectable()
export class AdminGuard implements CanActivate {
  public canActivate(context: ExecutionContext) {
    const { headers } = context.switchToHttp().getRequest<FastifyRequest>();
    return headers['x-api-key'] === process.env['API_KEY'];
  }
}
