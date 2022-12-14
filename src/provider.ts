import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://admin:admin123@cluster0.txheszp.mongodb.net/?retryWrites=true&w=majority',
      ),
  },
];
