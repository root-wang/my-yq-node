import {faker} from "@faker-js/faker/locale/zh_CN"

export const nameTool = function () {
  return faker.name.lastName() + faker.name.firstName()
}