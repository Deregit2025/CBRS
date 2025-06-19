import { expect } from "@playwright/test";

export class UsersPage {
  constructor(page) {
    this.page = page;
    this.usersLink = page.getByRole("link", {name: "Users Create and manage users",});
    this.searchInput = page.getByPlaceholder("Search by name, phone number");
    this.searchInputNameOnly = page.getByPlaceholder("Search by name");
    this.tbody = page.locator("tbody");
    this.createUserButton = page.getByRole("button", { name: "Create User" });
    this.firstNameInput = page.getByRole("textbox", { name: "First Name" });
    this.middleNameInput = page.getByRole("textbox", { name: "Middle Name" });
    this.lastNameInput = page.getByRole("textbox", { name: "Last Name" });
    this.emailInput = page.getByRole("textbox", { name: "Email" });

    // Phone input is actually a spinbutton, not textbox
    this.phoneInput = page.getByRole("spinbutton", { name: /Phone Number/ });

    this.addressInput = page.getByRole("textbox", { name: "Address" });
    this.realmDropdown = page.getByRole("button", {
      name: /Realm Select Realm/i,
    });
    this.realmOptionMaker = page.getByRole("option", { name: "Maker" });
    this.saveButton = page.getByRole("button", { name: "Create", exact: true });
  }
  async navigate() {
    await this.usersLink.click();

    // Wait for URL to include '/users'
    await this.page.waitForFunction(
      () => window.location.pathname.includes("/users"),
      { timeout: 10000 }
    );

    // Or wait for some unique element on the /users page, for example the create user button:
    await this.createUserButton.waitFor({ state: "visible", timeout: 10000 });
  }

  async openCreateUserModal() {
    await this.createUserButton.click();
    await this.firstNameInput.waitFor({ state: "visible", timeout: 5000 });
  }
  async searchByName(name, shouldExist = true) {
    await this.searchInputNameOnly.fill(name);
    await this.searchInputNameOnly.press("Enter");
    if (shouldExist) {
      await expect(this.tbody).toContainText(name);
    } else {
      await expect(this.tbody).not.toContainText(name);
    }
  }

  async searchByEmailOrPhone(value, shouldExist = true) {
    await this.searchInput.fill(value);
    await this.searchInput.press("Enter");
    if (shouldExist) {
      await expect(this.tbody).toContainText(value);
    } else {
      await expect(this.tbody).not.toContainText(value);
    }
  }

  async toggleUserStatusByName(userName) {
    await this.searchInput.fill(userName);
    await this.searchInput.press("Enter");

    const enabledCell = this.page.getByRole("cell", {
      name: /Currently enabled - click to/i,
    });
    if (await enabledCell.isVisible()) {
      await enabledCell.locator("span").nth(2).click();
      await this.page.getByRole("button", { name: "Yes" }).click();
      await expect(this.page.getByRole("listitem")).toContainText(
        "User status updated"
      );
      return;
    }

    const disabledCell = this.page.getByRole("cell", {
      name: /Currently disabled - click to/i,
    });
    if (await disabledCell.isVisible()) {
      await disabledCell.locator("span").nth(2).click();
      await this.page.getByRole("button", { name: "Yes" }).click();
      await expect(this.page.getByRole("listitem")).toContainText(
        "User status updated"
      );
      return;
    }
  }

  async createUser(user) {
    await this.createUserButton.click();

    await this.firstNameInput.fill(user.firstName);
    await this.middleNameInput.fill(user.middleName);
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);
    await this.phoneInput.fill(user.phone);
    await this.addressInput.fill(user.address);

    await this.realmDropdown.click();
    // Select realm from dropdown dynamically (currently hardcoded to Maker)
    if (user.realm.toLowerCase() === "maker") {
      await this.realmOptionMaker.click();
    } else {
      // Add logic here if other realms exist
      await this.realmOptionMaker.click();
    }

    await this.saveButton.click();
  }

  async fillUserFields(user) {
    await this.firstNameInput.fill(user.firstName);
    await this.middleNameInput.fill(user.middleName);
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);

    const phoneToFill = user.phone.startsWith("+251")
      ? user.phone.slice(4)
      : user.phone;
    await this.phoneInput.waitFor({ state: "visible", timeout: 5000 });
    await this.phoneInput.fill(phoneToFill);

    await this.addressInput.fill(user.address);
    await this.realmDropdown.click();
    await this.realmOptionMaker.click();
  }

  async submitUserForm() {
    await this.saveButton.waitFor({ state: "visible", timeout: 5000 });
    await this.saveButton.click();
  }

  async createUserWithInvalidName(user) {
    await this.openCreateUserModal();
    await this.fillUserFields(user);
    await this.submitUserForm();
  }

  async createUserWithInvalidPhone(user) {
    await this.openCreateUserModal();
    await this.fillUserFields(user);
    await this.submitUserForm();
  }

  async createUserWithInvalidEmail(user) {
    await this.openCreateUserModal();
    await this.fillUserFields(user);
    await this.submitUserForm();
  }
}


