import { expect, Locator, Page } from "@playwright/test";

export class PracticeFormPage {
    private readonly page: Page;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly phoneNumberInput: Locator;
    private readonly dateInput: Locator;
    private readonly subjectsInput: Locator;
    private readonly currentAdressInput: Locator;
    private readonly stateInput: Locator;
    private readonly cityInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#userEmail');
        this.phoneNumberInput = page.locator('#userNumber');
        this.dateInput = page.locator('#dateOfBirthInput');
        this.subjectsInput = page.locator('#subjectsInput');
        this.currentAdressInput = page.locator('#currentAddress');
        this.stateInput = page.locator('#react-select-3-input');
        this.cityInput = page.locator('#react-select-4-input');
    }

    async fillInForm(firstName, lastName, email, gender, phoneNumber, dateOfBirth, subjects, hobbies, adress, state, city) {
        await this.fillInFirstName(firstName);
        await this.fillInLastName(lastName);
        await this.fillInEmail(email);
        await this.fillIngender(gender);
        await this.fillInPhoneNumber(phoneNumber);
        await this.fillInDate(dateOfBirth);
        await this.fillInSubjects(subjects);
        await this.fillInHobbies(hobbies)
        await this.fillInAdress(adress);
        await this.fillInState(state);
        await this.fillInCity(city);
        await this.page.locator('#submit').click({ force: true });
    }

    private async fillInFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
        await expect(this.firstNameInput).toHaveValue(firstName);
    }

    private async fillInLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
        await expect(this.lastNameInput).toHaveValue(lastName);
    }

    private async fillInEmail(email: string) {
        await this.emailInput.fill(email);
        await expect(this.emailInput).toHaveValue(email);
    }

    private async fillIngender(gender: string) {
        if (gender == 'Male') {
            await this.page.locator(`text=${gender}`).nth(1).check();
            await expect(this.page.locator(`text=${gender}`).nth(1)).toBeChecked();
        }
        else {
            await this.page.locator(`text=${gender}`).check();
            await expect(this.page.locator(`text=${gender}`)).toBeChecked();
        }
    }

    private async fillInPhoneNumber(phoneNumber: string) {
        await this.phoneNumberInput.fill(phoneNumber);
        await expect(this.phoneNumberInput).toHaveValue(phoneNumber);
    }

    private async fillInDate(dateOfBirth: string) {
        await this.dateInput.fill(dateOfBirth);
        await this.dateInput.press('Enter');
        await expect(this.dateInput).toHaveValue('30 Apr 1997');
    }

    private async fillInSubjects(subjects: string) {
        await this.subjectsInput.fill(subjects);
        await this.subjectsInput.press('Enter');
    }

    private async fillInHobbies(hobbies: string) {
        await this.page.check(`text=${hobbies}`);
        await expect(this.page.locator(`text=${hobbies}`)).toBeChecked();
    }

    private async fillInAdress(adress: string) {
        await this.currentAdressInput.fill(adress);
        await expect(this.currentAdressInput).toHaveValue(adress);
    }

    private async fillInState(state: string) {
        await this.stateInput.fill(state);
        await this.stateInput.press('Enter');
        await expect(this.page.locator('.css-1uccc91-singleValue')).toHaveText(state);
    }

    private async fillInCity(city: string) {
        await this.cityInput.fill(city);
        await this.cityInput.press('Enter');
        await expect(this.page.locator('.css-1uccc91-singleValue').nth(1)).toHaveText(city);
    }
}