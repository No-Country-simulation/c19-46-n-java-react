import { test, expect } from '@playwright/test';

test("Formulario de login", async ({ page }) => {
  // Navegar a la página con el formulario de login
  await page.goto("http://127.0.0.1:5173/");

  // Completar el campo de nombre
  await page.fill('input[id="nicknameLogin"]', 'JuanP');

  // Completar el campo de contraseña
  await page.fill('input[id="password"]', '12345678');
  

  // Hacer clic en el botón de enviar
  await page.click('button[type="submit"]');


// Loguear el mensaje de confirmación en la consola
   console.log('Entrar');

});
