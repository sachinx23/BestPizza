# Best Pizza Bilbao

Web de la pizzería Best Pizza (Calle Henao 27, Bilbao), publicada en https://best-pizza.es con GitHub Pages.

## Cómo editar

No hace falta instalar nada: se edita `index.html` y, para el diseño, `css/main.css`.

- **Precios y pizzas**: cada pizza es un `<li>` dentro de `<ul class="carta">` en `index.html`.
- **Horario**: hay que cambiarlo en tres sitios de `index.html`: la tabla `class="hours"`,
  el objeto `SCHEDULE` del script del final (indicador "Abierto ahora") y el bloque
  `openingHoursSpecification` de los datos estructurados para Google.
- **Colores**: variables al principio de `css/main.css` (`--basil`, `--tomato`, `--crust`).
- **Tipografía**: Bricolage Grotesque, alojada en `fonts/` (licencia SIL OFL).
