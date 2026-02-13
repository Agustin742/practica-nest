import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Jonh Doe',
      phone: '123456789',
    },
    {
      id: 2,
      name: 'Jonh Doe',
      phone: '123456789',
    },
  ];

  getUsers() {
    return this.users;
  }
}
