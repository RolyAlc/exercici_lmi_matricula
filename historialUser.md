# Historial

## html

- Se ha modificado los dos to-do. Modo facil

## /backend/public/js/index.js

- Se ha modificado los dos to-do. Modo dificil
- Se ha tenido que consultar con web del teacher para seguir el modelo
- Se ha tenido que ir al index.js del backer (no del public) para mirar la url para hacer el POST al srv local

index.html >> commit 92a217fbfcf6bfd2c5645adefb6915020eb839ce >> index.html-Solucionar errores de form junto a index.js-v1.0.2

[solucionar pq no aparece dianmicamente modulProfesional junto con su index.js]
He cambiado algunas cosa a Val
Se ha cambido el id del select para que sea cicle >> error Uncaught TypeError: Cannot read properties of null (reading 'addEventListener') at index.js:134:13
Se ha cambido los value x lo que corresponde con los valores de json de index.js

index.js >> commit 754121ca3fe02c0c3eef41ed77109c3b15945c59 >> publicJSindex.js-Solucionar error de compatibilidad del form junto a index.html-v1.0.1

[solucionar pq no aparece dianmicamente modulProfesional junto con su index.html]
Se ha añadido modos debug
array ok
los elementos generados no se están mostrando en el DOM.
se a añadido al contendor llistaModulsDiv todo el label que se genera dinamicamente

SE HA CREADO MANUALMENTE LA CARPETA uploads para guardar los xml,xslt, xsl-fo
Problema de erro de xsltproc >> Probar en entorno linux

PRUEBA FINAL 1

PTE
NO SABES PORQUE HAY ESPACIOS ARRIBA Y ABAJO A LA HORA DE GENERAR UN XML
PROBAR EN ENTORNO LINUX

SE HA RELIZADO LA PRUEBA EN ENTORNO LINUX CON LOS NUEVOS CAMBIOS (COMMITs)
PRUEBAS 1 >> OK

---
## comandos

- xml
- xsd
- dtd
- xslt
- xslt-fo

---

## comandos

- `xml`
  - Lenguaje de marcado que define datos de forma estructurada.
  - Utilizado para almacenar e intercambiar información.

- `xs:schema`
  - Define la estructura (reglas) de un documento XML.
  - Es el elemento raíz de un archivo `.xsd`.
  - Especifica qué elementos y atributos son válidos y cómo deben aparecer.

  - `xs:element`
    - Define un **elemento XML**.
    - Puede ser simple (texto plano) o complejo (con subelementos y atributos).
    - Atributos comunes:
      - `name`: nombre del elemento.
      - `type`: tipo de dato (`xs:string`, `xs:int`, etc.).
      - Puede contener directamente un `xs:complexType`.

    - `xs:complexType`
      - Define un elemento que **contiene otros elementos o atributos**.
      - Se usa para construir estructuras jerárquicas.

      - `xs:sequence`
        - Indica que los elementos hijos deben aparecer **en orden**.
        - Contiene una lista de `xs:element` hijos.
        - Permite repetir o hacer opcionales elementos con atributos como:
          - `minOccurs` (mínimo número de veces)
          - `maxOccurs` (máximo número de veces)

---

### ✅ **Opción A: Instalar Node.js 18 (LTS) desde NodeSource**

1. **Eliminar versiones anteriores** (si las hay):

   ```bash
   sudo apt remove -y nodejs libnode-dev
   sudo apt autoremove -y
   ```

2. **Agregar el repositorio de Node.js 18:**

   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   ```

3. **Instalar Node.js:**

   ```bash
   sudo apt install -y nodejs
   ```

4. **Verificar versiones:**

   ```bash
   node -v
   npm -v
   ```

---

### ✅ **Opción B: Usar `nvm` (recomendado para desarrolladores)**

Esto te permite instalar y cambiar entre múltiples versiones fácilmente.

1. **Instalar `nvm`:**

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   source ~/.bashrc  # o ~/.zshrc si usas Zsh
   ```

2. **Instalar Node.js 18 (o la última):**

   ```bash
   nvm install 18
   nvm use 18
   ```

3. **Hacer que se use siempre esa versión:**

   ```bash
   nvm alias default 18
   ```

4. **Verificar:**

   ```bash
   node -v
   npm -v
   ```

---
