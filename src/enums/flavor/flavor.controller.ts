import { Controller, Body, Param } from '@nestjs/common';
import { Get, Post, Patch, Delete } from '@nestjs/common';
import { FlavorService } from './flavor.service';
import { CreateFlavorDto } from './dto/create-flavor.dto';
import { UpdateFlavorDto } from './dto/update-flavor.dto';

@Controller('api/enum/flavor')
export class FlavorController {
  constructor(private readonly flavorService: FlavorService) {}

  @Post()
  create(@Body() createFlavorDto: CreateFlavorDto) {
    return this.flavorService.create(createFlavorDto);
  }

  @Get()
  findAll() {
    return this.flavorService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlavorDto: UpdateFlavorDto) {
    return this.flavorService.update(+id, updateFlavorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flavorService.remove(+id);
  }
}
