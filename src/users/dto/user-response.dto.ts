import { UserDataDTO } from './user-data.dto';

export class UserResponseDTO {
  statusCode: number;
  data: UserDataDTO;
  messages: {
    message: string;
    property: string | null;
  };
}
