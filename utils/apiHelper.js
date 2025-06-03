import { request } from '@playwright/test';
import { config } from '../config/config.js';

export async function addList(listName) {
  const context = await request.newContext();
  const response = await context.post(`${config.baseUrl}/api/lists`, {
    data: { name: listName }
  });
  return response;
}

export async function deleteList(listId) {
  const context = await request.newContext();
  const response = await context.delete(`${config.baseUrl}/api/lists/${listId}`);
  return response;
}
