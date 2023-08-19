// what to do of prices
export interface Iproduct {
  name: string;
  quantity: number;
  color: Color;
  category: Category;
  image: IModel;
}

export interface IModel {
  url: string;
  filename: string;
}

enum Color {
  red = 'red',
  black = 'black',
  white = 'white',
  yellow = 'yellow',
}

enum Category {
  shirt = 'shirt',
  Tshirt = 'Tshirt',
  Cup = 'cup',
}
