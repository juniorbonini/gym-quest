import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDTO {
  @ApiProperty({ example: 'token-aqui' })
  accessToken: string;

  @ApiProperty({ example: 'Bearer' })
  tokenType: string;

  @ApiProperty({
    example: {
      example: {
        id: 'uuid',
        name: 'Junior Bonini',
        email: 'junior@gmail.com',
      },
    },
  })
  user: {
    id: string;
    name: string;
    email: string;
  };
}
