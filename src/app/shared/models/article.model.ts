import { IArticle } from "../interfaces/article.interface";

export class Article implements IArticle {
  constructor(
    public urlName: string,
    public images: string,
    public title: string,
    public description: string,
    public id?: number,
  ) {
  }
}