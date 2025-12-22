import { ApiProperty } from '@nestjs/swagger';

export class PaginetedResponseDTO<T> {
  @ApiProperty()
  data: T[];

  @ApiProperty()
  meta: {
    page: number;
    total: number;
    limit: number;
    totalPage: number;
  };
}
