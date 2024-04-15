import { ApiProperty } from '@nestjs/swagger';
import { Product as ProductModel } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class ProductEntity implements ProductModel {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({
    nullable: true,
  })
  description: string | null;
}
