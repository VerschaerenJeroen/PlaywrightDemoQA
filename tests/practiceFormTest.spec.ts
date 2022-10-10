import test, { expect } from "@playwright/test";
import { PracticeFormPage } from "../pages/practiceForm.page";

test.describe('Fill in practice form', () => {
    test('Fill & Validate in practice form', async ({ page }) => {
        await page.goto('automation-practice-form');

        const practiceFormPage = new PracticeFormPage(page);
        const phoneNumber = Math.floor(1000000000 + Math.random() * 900000000).toString();
        await practiceFormPage.fillInForm('Wood', 'Chucker', 'woodchucker@gmail.com', 'Male', phoneNumber, '1997/04/30', 'Hindi', 'Sports', 'Devilstreet 666', 'NCR', 'Delhi');
    });
});