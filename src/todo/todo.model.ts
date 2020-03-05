import {
  Table,
  Column,
  Model,
  DataType,
  NotEmpty,
  IsNumeric,
  Default,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript';
import { User } from "../user/user.model";

@Table({
timestamps: true,
freezeTableName: true,
tableName: 'todos'
})
export class Todo extends Model<Todo> {
  @IsNumeric
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  })
  id: number;

  @NotEmpty
  @Column({ allowNull: false, type: DataType.STRING(100) })
  title: string;

  @Column({ type: DataType.STRING(100) })
  description: string;

  @BelongsTo(() => User, 'assignedTo')
  user: User;

  @ForeignKey(() => User)
  @Column({ allowNull: false, type: DataType.INTEGER })
  assignedTo: number;

  @NotEmpty
  @Default(false)
  @Column({ allowNull: false, type: DataType.STRING(100) })
  isDone: string;

  @NotEmpty
  @Default(false)
  @Column({ allowNull: false, type: DataType.STRING(100) })
  isDeleted: string;
}
