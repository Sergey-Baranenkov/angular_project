import IIngredient from "./IIngredient";

export default interface IProduct {
  name: string;
  description: string;
  ingredients: Array<IIngredient>
}
