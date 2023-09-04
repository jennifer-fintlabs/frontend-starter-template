import { MyData } from './types';

export async function fetchData(): Promise<MyData> {
    const response = await fetch('/okonomi/faktura/fakturautsteder/');

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
}



// export async function addItem(newItem: Item): Promise<Item> {
//   const response = await fetch(`/items`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newItem),
//   });
//
//   if (!response.ok) {
//     throw new Error('Failed to add item');
//   }
//
//   return response.json();
// }
//
// export async function editItem(itemId: number, updatedItem: Item): Promise<Item> {
//   const response = await fetch(`/items/${itemId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedItem),
//   });
//
//   if (!response.ok) {
//     throw new Error('Failed to edit item');
//   }
//
//   return response.json();
// }
