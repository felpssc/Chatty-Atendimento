/* eslint-disable no-mixed-spaces-and-tabs */
import { PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, Entity } from "typeorm";
import { User } from "./User";
import { v4 as uuid } from "uuid";

@Entity("connections")
class Connection {
  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  socket_id: string

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
  	if(!this.id) {
  		this.id = uuid();
  	}
  }
}

export { Connection };