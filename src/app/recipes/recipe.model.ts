/**
 * Created by sheikhu on 19/10/17.
 */

export class Recipe {
  name: string;
  description: string;
  imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
