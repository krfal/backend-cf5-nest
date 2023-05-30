import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      const product = await this.productService.create(createProductDto);
      return product;
    } catch (error) {
      throw new NotFoundException('Failed to create product');
    }
  }

  @Get()
  async findAll() {
    try {
      const products = await this.productService.findAll();
      return products;
    } catch (error) {
      throw new NotFoundException('Failed to fetch products');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const product = await this.productService.findOne(+id);
      return product;
    } catch (error) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      const product = await this.productService.update(+id, updateProductDto);
      return product;
    } catch (error) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.productService.remove(+id);
      return { message: 'Product deleted successfully' };
    } catch (error) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }
}
