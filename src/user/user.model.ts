import {
    Table,
    Column,
    Model,
    DataType,
    NotEmpty,
    IsNumeric,
  } from 'sequelize-typescript';
import _ from 'lodash';
  
export const MOBILE_REGEX = /^[6-9]{1}[0-9]{9}$/;
@Table({
  timestamps: true,
  freezeTableName: true,
  tableName: 'users'
})
export class User extends Model<User> {
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
  firstName: string;

  @NotEmpty
  @Column({ allowNull: false, type: DataType.STRING(100) })
  lastName: string;
}
