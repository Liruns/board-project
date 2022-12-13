import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Board, BoardData } from '../schemas/board.schema';
import { CreateBoardDto } from '../dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(@InjectModel(Board.name) private boardModel: Model<BoardData>) {}

  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    const createdCat = new this.boardModel(createBoardDto);
    return createdCat.save();
  }

  async findAll(): Promise<Board[]> {
    try{
        return this.boardModel.find().exec();
    } catch (err) {
        console.log('error...');
    }
  }
}
