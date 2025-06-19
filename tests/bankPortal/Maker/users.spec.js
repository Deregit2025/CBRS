import { test, expect } from "@playwright/test";
import { UsersPage } from "../../../pages/bankPortal/maker/users.page.js";
import { login } from "../../../pages/bankPortal/maker/login.page.js";
import { usersTestData } from "../../../testData/bankPortalTestData/usersTestData.js";

test.describe("✅ Users Module Tests", () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test("🔍 Search user by name (should find)", async ({ page }) => {
    const usersPage = new UsersPage(page);
    await usersPage.navigate();
    await usersPage.searchByName(usersTestData.searchByName[0].input, true);
  });

  test("🔍 Search user by phone/email (should find)", async ({ page }) => {
    const usersPage = new UsersPage(page);
    await usersPage.navigate();

    for (const phoneTest of usersTestData.searchByPhone) {
      await usersPage.searchByEmailOrPhone(phoneTest.input, phoneTest.isValid);
    }

    for (const emailTest of usersTestData.searchByEmail) {
      await usersPage.searchByEmailOrPhone(emailTest.input, emailTest.isValid);
    }
  });

  test("🔁 Toggle user status (Enable/Disable)", async ({ page }) => {
    const usersPage = new UsersPage(page);
    await usersPage.navigate();

    await usersPage.toggleUserStatusByName(
      usersTestData.createUser.input.firstName +
        " " +
        usersTestData.createUser.input.lastName
    );
  });

  test(`➕ Create user: ${usersTestData.createUser.input.firstName} ${usersTestData.createUser.input.lastName}`, async ({
    page,
  }) => {
    const usersPage = new UsersPage(page);
    await usersPage.navigate();
    await usersPage.createUser(usersTestData.createUser.input);

    await expect(usersPage.tbody).toContainText(
      usersTestData.createUser.input.firstName
    );
  });

  // ❌ Invalid Name Input
  for (let i = 0; i < usersTestData.invalidNameUsers.length; i++) {
    const user = usersTestData.invalidNameUsers[i];
    test(`❌ Invalid Name Test #${i + 1}: ${user.firstName} ${
      user.lastName
    }`, async ({ page }) => {
      const usersPage = new UsersPage(page);
      await usersPage.navigate();
      await usersPage.createUserWithInvalidName(user);
    });
  }

  // ❌ Invalid Phone Input
  for (let i = 0; i < usersTestData.invalidPhoneUsers.length; i++) {
    const user = usersTestData.invalidPhoneUsers[i];
    test(`❌ Invalid Phone Test #${i + 1}: ${user.phone}`, async ({ page }) => {
      const usersPage = new UsersPage(page);
      await usersPage.navigate();
      await usersPage.createUserWithInvalidPhone(user);
    });
  }

  // ❌ Invalid Email Input
  for (let i = 0; i < usersTestData.invalidEmailUsers.length; i++) {
    const user = usersTestData.invalidEmailUsers[i];
    test(`❌ Invalid Email Test #${i + 1}: ${user.email}`, async ({ page }) => {
      const usersPage = new UsersPage(page);
      await usersPage.navigate();
      await usersPage.createUserWithInvalidEmail(user);
    });
  }
});
