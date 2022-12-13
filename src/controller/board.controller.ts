import { Controller, Get, Param , Post , Body } from '@nestjs/common';
import { CreateBoardDto } from '../dto/create-board.dto';
import { BoardsService } from '../service/board.service';

@Controller('boards')
export class BoardsController {

    // Service 호출
    constructor(private readonly boardsService: BoardsService) {}

    @Get('all')
    findAll(): string {
        
        // 향후 저장된 데이터를 가져와 json으로 가공
        let tempJson = {
            statusCode : 200 ,
            data : {
                id : 1 ,
                owner : "admin" ,
                title : "Sample Title" ,
                description : "Sample description"
            }
        }
        // boardsService.findAll();
        return JSON.stringify(tempJson);
    }

    @Get(':id')
    findOne(@Param('id') id: number): string {

        // 향후 저장된 데이터를 가져와 json으로 가공
        let tempJson = {
            statusCode : 200 ,
            data : {
                id : id ,
                owner : "admin" ,
                title : "Sample Title" ,
                description : "Sample description"
            }
        }

        // boardsService.findOne(id); 구현 필요
        return JSON.stringify(tempJson);
    }

    @Post()
    create(@Body() createBoardDto: CreateBoardDto) {
        console.log(createBoardDto);
        return this.boardsService.create(createBoardDto);
    }

}