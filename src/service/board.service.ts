import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Board, BoardData } from '../schemas/board.schema';
import { CreateBoardDto } from '../dto/board.dto';

@Injectable()
export class BoardsService {
  constructor(@InjectModel(Board.name) private boardModel: Model<BoardData>) {}

  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    const createdBoard = new this.boardModel(createBoardDto);
    return createdBoard.save();
  }

  async findAll(): Promise<Board[]> {
    try {
      return this.boardModel.find().exec();
    } catch (err) {
      console.log('{} Error', err);
    }
  }

  async findId(): Promise<Board[]> {
    try {
      return this.boardModel.find().exec();
    } catch (err) {
      console.log('{} Error', err);
    }
  }
}
