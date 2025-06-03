import { test, expect } from '@playwright/test';
import { addList, deleteList } from '../../utils/apiHelper.js';

test('Add and delete a list using API', async () => {
  const listName = 'API Test List';

  const addRes = await addList(listName);
  expect(addRes.ok()).toBeTruthy();
  const { id } = await addRes.json();

  const delRes = await deleteList(id);
  expect(delRes.ok()).toBeTruthy();
});
