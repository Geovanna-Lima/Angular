export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: '1Kg Maça',
    price: 4.99,
    description:
      'Toda a linha de hortifruti sempre fresquinhos, saudáveis e com qualidade garantida de origem.'
  },
  {
    id: 2,
    name: 'Suco de Maracujá',
    price: 5.09,
    description:
      'O Suco de Maracujá 100% maracujá! Não possui mistura de fruta. Muito mais sabor para você!'
  },
  {
    id: 3,
    name: 'Filé Mignon',
    price: 50,
    description: ''
  },
  {
    id: 4,
    name: 'Notebook',
    price: 750,
    description:
      'O notebook prático, leve e perfeito pra acompanhar sua rotina está aqui!'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
