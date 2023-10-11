import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';
import { User } from 'src/users/entities/user.entity';
import { IAuthResponse } from 'src/lib/interfaces';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Address) private addressRepository: Repository<Address>,
  ) {}

  async updateAddress(
    userId: number,
    createAddressDto: CreateAddressDto,
  ): Promise<IAuthResponse> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['address'],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const newAddress = await this.addressRepository.save(createAddressDto);
    console.log(newAddress);
    user.address = newAddress;

    await this.userRepository.save(user);
    return {
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
        address: {
          city: user.address.city,
          street: user.address.street,
          house: user.address.house,
          apartment: user.address.apartment,
        },
      },
    };
  }
}
