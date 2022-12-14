import { Controller, Get, Param, Post, Body, Res } from '@nestjs/common';
import { Board } from 'src/schemas/board.schema';
import { CreateBoardDto } from '../dto/board.dto';
import { BoardsService } from '../service/board.service';

@Controller('boards')
export class BoardsController {
  // Service 호출
  constructor(private readonly boardsService: BoardsService) {}

  @Get('all')
  findAll() {
    // 향후 직렬화 구현필요
    const tempJson = {
      statusCode: 200,
      data: {
        id: 1,
        owner: 'admin',
        title: 'Sample Title',
        description: 'Sample description',
      },
    };
    this.boardsService.findAll();
    return JSON.stringify(tempJson);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const tempJson = {
      statusCode: 200,
      data: {
        id: id,
        owner: 'admin',
        title: 'Sample Title',
        description: 'Sample description',
      },
    };

    // boardsService.findOne(id); 구현 필요
    return JSON.stringify(tempJson);
  }

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    try {
      const createdData: Promise<Board> =
        this.boardsService.create(createBoardDto);
      return createdData;
    } catch (err) {
      console.log(err);
    }
  }
}
