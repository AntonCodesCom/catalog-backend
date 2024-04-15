import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // configuration is global
      load: [
        () => {
          const port = process.env.PORT;
          if (port && isNaN(+port)) {
            throw new Error(
              '`PORT` environment variable should be a numeric string.',
            );
          }
          return { port: +port || 3000 };
          // omitting `DATABASE_URL` since it is handled by Prisma
        },
      ],
    }),
    PrismaModule,
    ProductModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
