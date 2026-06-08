# Créditos y licencias — `/public/images/hitos/`

Imágenes de la línea del tiempo de Arivechi (componente `LineaTiempo`).
Todas provienen de Wikimedia Commons salvo el escudo institucional.
Verificar la página de archivo de cada una para los términos exactos
de autoría y licencia.

---

## En uso

### `capilla-santa-cruz-buenavista.jpg` — Hito 1 (1627)
- **Archivo Commons**: `Capilla_de_la_Santa_Cruz,_Buenavista.jpg`
- **Página**: <https://commons.wikimedia.org/wiki/File:Capilla_de_la_Santa_Cruz,_Buenavista.jpg>
- **Resolución**: 1654 × 1063
- **Autor**: LIMO 5 (Wikimedia Commons)
- **Licencia**: CC BY-SA 4.0
- **Descripción**: Capilla rural de Buenavista, Arizpe, Sonora.
- **Uso**: imagen del hito 1627 — fundación de la misión jesuita.

### `parroquia-rosario-rayon.jpg` — Hito 2 (1638)
- **Archivo Commons**: `Parroquia_de_Nuestra_Señora_del_Rosario,_Rayon,_Sonora,_Mexico.JPG`
- **Página**: <https://commons.wikimedia.org/wiki/File:Parroquia_de_Nuestra_Se%C3%B1ora_del_Rosario,_Rayon,_Sonora,_Mexico.JPG>
- **Resolución**: 3162 × 3043
- **Licencia**: ver página de archivo en Commons.
- **Descripción**: Parroquia colonial de Rayón, Sonora, con campanario y frontón blanco.
- **Uso**: imagen del hito 1638 — misión formalizada.

### `palacio-gobierno-hermosillo.jpg` — Hito 3 (1932)
- **Archivo Commons**: `Palacio_de_Gobierno,_Hermosillo,_Sonora.jpg`
- **Página**: <https://commons.wikimedia.org/wiki/File:Palacio_de_Gobierno,_Hermosillo,_Sonora.jpg>
- **Resolución**: 4206 × 2761 (Canon EOS Rebel XSi)
- **Licencia**: ver página de archivo en Commons.
- **Descripción**: Fachada neoclásica del Palacio de Gobierno de Sonora en Hermosillo.
- **Uso**: imagen del hito 1932 — decreto municipal del estado de Sonora.

### `sierra-madre-paisaje.jpg` — Hito 4 (2010)
- **Archivo Commons**: `La_sierra_madre_occidental.JPG`
- **Página**: <https://commons.wikimedia.org/wiki/File:La_sierra_madre_occidental.JPG>
- **Resolución**: 4608 × 3456
- **Licencia**: ver página de archivo en Commons.
- **Descripción**: Vista de paisaje serrano de la Sierra Madre Occidental con árboles en primer plano y valle al fondo.
- **Uso**: imagen del hito 2010 — Cerro de las Conchas como Área Natural Protegida.

### `trilobite-cambrico.jpg` — Hito 5 (2016)
- **Archivo Commons**: `Paradoxides_minor_fossil_trilobite_(Jince_Formation,_Middle_Cambrian;_Jince_area,_Bohemia,_Czech_Republic)_3_(15083360620).jpg`
- **Página**: <https://commons.wikimedia.org/wiki/File:Paradoxides_minor_fossil_trilobite_(Jince_Formation,_Middle_Cambrian;_Jince_area,_Bohemia,_Czech_Republic)_3_(15083360620).jpg>
- **Resolución**: 3008 × 2000
- **Licencia**: ver página de archivo en Commons (típicamente CC BY-SA o CC BY).
- **Descripción**: Macro de fósil de trilobite Paradoxides minor del periodo Cámbrico medio. Fotografía profesional sobre fondo de roca neutra.
- **Uso**: imagen del hito 2016 — descubrimiento de fósiles cámbricos en el Cerro de las Conchas.
- **Nota**: el fósil específico no es de Arivechi (proviene de República Checa) pero ilustra el periodo geológico mencionado en el hito.

### `/escudo-arivechi-hd.png` — Hito 6 (2024)
- **Ubicación**: `/public/escudo-arivechi-hd.png` (no en `/hitos/`).
- **Origen**: archivo institucional del Gobierno Municipal de Arivechi.
- **Uso**: hito 2024 — administración actual. Renderizado sobre gradient guinda en lugar de fotografía.

---

## Descartadas

### `iglesia-san-jose-pimas.jpg`
- **Razón de descarte**: poste de luz prominente en primer plano + cables eléctricos cruzando la fachada de la iglesia.
- **Estado**: archivo eliminado del repositorio.
- **Reemplazo**: `capilla-santa-cruz-buenavista.jpg` para el hito 1627.

---

## Notas operativas

- Las imágenes se sirven desde rutas `/public/images/hitos/...` y `/public/escudo-arivechi-hd.png`.
- Si el municipio entrega versiones HD propias de cada hito (ej. fotos del Cerro de las Conchas reales, del kiosco de Arivechi, del palacio municipal local), sustituir el archivo manteniendo el mismo nombre para no romper las referencias en `components/home/LineaTiempo.jsx`.
- Para uso público con atribución estricta, citar autor + URL de la página de archivo en Commons.
