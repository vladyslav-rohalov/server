import { Controller, Body, Param } from '@nestjs/common';
import { Get, Post, Patch, Delete } from '@nestjs/common';
import { AccessoryTypeService } from './accessory-type.service';
import { CreateAccessoryTypeDto } from './dto/create-accessory-type.dto';
import { UpdateAccessoryTypeDto } from './dto/update-accessory-type.dto';

@Controller('api/enum/accessory-type')
export class AccessoryTypeController {
  constructor(private readonly accessoryTypeService: AccessoryTypeService) {}

  @Post()
  create(@Body() createAccessoryTypeDto: CreateAccessoryTypeDto) {
    return this.accessoryTypeService.create(createAccessoryTypeDto);
  }

  @Get()
  findAll() {
    return this.accessoryTypeService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccessoryTypeDto: UpdateAccessoryTypeDto,
  ) {
    return this.accessoryTypeService.update(+id, updateAccessoryTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessoryTypeService.remove(+id);
  }
}
