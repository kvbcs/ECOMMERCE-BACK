import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDto } from './dto';
import { UpdateCartDto } from './dto/update.cart.dto';
import { JwtGuard } from 'src/auth/guards';

@UseGuards(JwtGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('/all')
  getAllCarts() {
    return this.cartService.getAllCarts();
  }

  @Get('/all/:id')
  getAllCartProducts(@Param('id') id: string) {
    return this.cartService.getAllCartProducts(id);
  }

  @Post('/add/:id')
  addCartProduct(
    @Body() dto: CartDto,
    @Param('id') id: string,
    // @Param('cartId') cartId: string,
    // @Param('productId') productId: string,
  ) {
    return this.cartService.addCartProduct(
      dto,
      id,
      // cartId,
      // productId,
      // updateDto,
    );
  }

  @Patch('/update/:cartId/:productId')
  updateCartProduct(
    @Body() dto: UpdateCartDto,
    @Param('cartId') cartId: string,
    @Param('productId') productId: string,
  ) {
    return this.cartService.updateCartProduct(cartId, productId, dto);
  }

  @Delete('/delete/:cartId/:productId')
  deleteCartProduct(
    @Param('cartId') cartId: string,
    @Param('productId') productId: string,
  ) {
    return this.cartService.deleteCartProduct(cartId, productId);
  }
}
