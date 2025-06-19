import { test, expect } from "@playwright/test";
import { pagination} from "../../../pages/bankPortal/maker/pagination.page.js";
import { login } from "../../../pages/bankPortal/maker/login.page.js";

test.describe("Agents Module Tests", () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });
  test('agent pagination', async ({ page }) =>{
    const newPagination = new pagination(page)
    await newPagination.navigate();
    await newPagination.agentPaginationbutton();
    await newPagination.paginationOption();
    await expect(newPagination.agentPaginationbutton).toHaveText('10');
    const rows = page.locator('tbody tr');
    await expect(rows).toHaveCount(10)
  });


});

