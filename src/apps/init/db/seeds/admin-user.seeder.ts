import { Roles } from "@/apps/oauth/constants";
import { User } from "@/apps/oauth/entities";
import { EntityManager } from "typeorm";
import { Seeder } from "../seeder/seeder.interface";

export class AdminUserSeeder implements Seeder {
  async run(entityManager: EntityManager): Promise<any> {
    console.log('hahahaha')
    await entityManager.getRepository(User).save(
      entityManager.getRepository(User).create({
        firstName: 'yu',
        lastName: 'shijie',
        age: 15,
        role: Roles.ADMIN
      }),
    )
  }

  async revert(entityManager: EntityManager): Promise<any> {
  }
}