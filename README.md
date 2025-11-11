# 🚀 FUNKOSHOP

Tienda en línea de Funkos desarrollada con Node.js, Express y MySQL.

Este es un proyecto como parte del challenge integrador para el curso de NodeJS del Programa Codo a Codo 4.0.

## 📋 Tabla de Contenidos

- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Endpoints Disponibles](#endpoints-disponibles)
- [Notas](#notas)
- [Optimizaciones de Plantillas EJS](#optimizaciones-de-plantillas-ejs)
- [Seguridad](#seguridad)
- [Autor](#autor)

## ⚙️ Tecnologías

**Backend:**
- Node.js
- Express.js
- MySQL2
- EJS (Template Engine)
- Express Session
- Bcrypt (Encriptación de contraseñas)
- Multer (Upload de archivos)
- Express Validator

**Frontend:**
- HTML5
- CSS3 (Flex, Grid)
- Bootstrap 5
- JavaScript Vanilla

## 🚀 Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/JonathanUrquiza/Trabajo-Integrador-codo-a-codo.git
cd Trabajo-Integrador-codo-a-codo
```

2. **Instalar dependencias:**
```bash
npm install
```

> **Nota:** Si tienes problemas instalando `bcrypt` en Windows, instala las herramientas de compilación:
> ```bash
> npm install --global windows-build-tools
> ```

3. **Configurar variables de entorno:**
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASS=tu_contraseña
DB_NAME=funkoshop_db
PORT=3008
SESSION_SECRET=tu_clave_secreta_para_sesiones
```

4. **Ejecutar el proyecto:**
```bash
# Modo desarrollo (con hot-reload)
npm run dev

# Modo producción
npm start
```

El servidor estará corriendo en: `http://localhost:3008`

## ⚙️ Configuración

### Base de Datos

Crear las siguientes tablas en MySQL:

```sql
CREATE TABLE licence (
    licence_id INT PRIMARY KEY AUTO_INCREMENT,
    licence_name VARCHAR(100) NOT NULL
);

CREATE TABLE category (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(100) NOT NULL
);

CREATE TABLE product (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(200) NOT NULL,
    product_description TEXT,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    discount INT DEFAULT 0,
    sku VARCHAR(50) UNIQUE,
    dues INT,
    image_front VARCHAR(255),
    image_back VARCHAR(255),
    licence_id INT,
    category_id INT,
    FOREIGN KEY (licence_id) REFERENCES licence(licence_id),
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

CREATE TABLE user (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    lastname VARCHAR(100),
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

## 📁 Estructura del Proyecto

```
Trabajo-Integrador-codo-a-codo/
├── public/                    # Archivos estáticos
│   ├── js/                   # JavaScript del frontend
│   ├── style/                # CSS y estilos
│   └── multimedia/           # Imágenes y recursos
├── src/
│   ├── config/               # Configuración (DB)
│   ├── controllers/          # Controladores
│   ├── middlewares/          # Middlewares personalizados
│   ├── models/               # Modelos de datos
│   ├── routes/               # Definición de rutas
│   ├── service/              # Lógica de negocio
│   ├── utils/                # Utilidades
│   └── views/                # Vistas EJS
├── index.js                  # Punto de entrada
├── package.json
└── .env                      # Variables de entorno (no incluido)
```

## 🌐 Endpoints Disponibles

### Rutas Públicas

#### Página Principal
- `GET /` - Home page con colecciones destacadas
- `GET /contact` - Página de contacto
- `GET /about` - Acerca de
- `GET /faqs` - Preguntas frecuentes

#### Shop (Tienda)
- `GET /shop/shop` - Lista todos los productos
- `GET /shop/items` - Filtra productos por licencia (query: `?licence=nombre`)
- `GET /shop/item/:id` - Detalle de un producto específico
- `GET /shop/item` - Busca productos por nombre (query: `?product_name=nombre`)
- `GET /shop/items/cart` - Carrito de compras
- `POST /shop/item/cart` - Procesar checkout
- `POST /shop/shop/items/:id/add` - Agregar item al carrito

### Rutas de Autenticación

#### Auth
- `GET /auth/login` - Vista de login
- `POST /auth/login` - Iniciar sesión (validación incluida)
- `GET /auth/register` - Vista de registro
- `POST /auth/register` - Registrar nuevo usuario
- `GET /auth/logout` - Cerrar sesión

**Validaciones de Login:**
- Email válido requerido
- Contraseña mínimo 8 caracteres alfanuméricos

### Rutas Administrativas (Requieren autenticación)

#### Admin Panel
- `GET /admin` - Panel administrativo (lista de productos)
- `GET /admin/create` - Formulario crear producto
- `POST /admin/create` - Crear nuevo producto (con upload de imágenes)
- `GET /admin/edit/:id` - Formulario editar producto
- `PUT /admin/edit/:id` - Actualizar producto
- `DELETE /admin/delete/:id` - Eliminar producto

**Nota:** Todas las rutas `/admin/*` requieren autenticación via middleware `isLogged`.

### Rutas de Prueba

- `GET /test` - Endpoints de testing

## 📝 Notas

- Las imágenes de productos se suben con Multer (máximo 2 archivos)
- El sistema usa sesiones para manejo de autenticación
- Los archivos estáticos se sirven desde la carpeta `public/`

## 🎨 Optimizaciones de Plantillas EJS

Se han realizado las siguientes mejoras en las vistas:

### Plantillas Optimizadas

#### **login.ejs**
- ✅ Corregido typo: `emal` → `email`
- ✅ Agregado manejo de errores (muestra mensajes de error del servidor)
- ✅ Campos requeridos (`required` attribute)
- ✅ Tipo de input correcto (`type="email"`)
- ✅ Link a registro agregado
- ✅ Action del formulario especificado (`/auth/login`)

#### **register.ejs**
- ✅ IDs duplicados eliminados (`password` y `password_confirm` ahora son únicos)
- ✅ Botón submit duplicado eliminado
- ✅ Validación de longitud de contraseña corregida (mínimo 8 caracteres)
- ✅ Manejo de errores agregado
- ✅ Campo de confirmación de contraseña funcional
- ✅ Checkbox de términos y condiciones con `required`
- ✅ Link a login agregado

#### **home.ejs**
- ✅ Eliminado código HTML comentado (> 50 líneas)
- ✅ Colecciones completamente dinámicas desde la base de datos
- ✅ Typo corregido: "Desubrí" → "Descubrí"
- ✅ URLs consistentes (todas empiezan con `/`)
- ✅ Atributos `alt` mejorados en imágenes

#### **shop.ejs**
- ✅ Error de sintaxis corregido en línea 5 (comilla faltante en `class`)
- ✅ Hardcoded URL eliminada (`localhost:8000` → rutas relativas)
- ✅ Botón "Ver todos" corregido (ya no está dentro de un submit)
- ✅ Espacios en atributos HTML corregidos
- ✅ Acentos y ortografía corregida

#### **footer.ejs & footerS.ejs**
- ✅ Links rotos corregidos (`.html` → rutas correctas)
- ✅ Año dinámico: `<%= new Date().getFullYear() %>` (antes hardcoded 2023)
- ✅ Script de Glide carga condicionalmente (`enableGlide`)
- ✅ URLs absolutas para recursos (`/multimedia/`, `/js/`)
- ✅ Typo corregido: "Iso tipo" → "Isotipo"

### Mejoras Generales

- 🔄 URLs consistentes en todas las plantillas (formato `/ruta`)
- 🛡️ Manejo de errores en formularios de autenticación
- ✨ Código más limpio y mantenible
- 📱 Mejor accesibilidad (`alt` tags, `aria-label`, etc.)
- 🎯 Formularios más robustos con validaciones HTML5

## 🔒 Seguridad

El sistema implementa las siguientes medidas de seguridad:

- **Bcrypt:** Las contraseñas se hashean con bcrypt (10 salt rounds) antes de guardarlas en la base de datos
- **Validación de entrada:** Express Validator valida los datos del login (email válido, contraseña mínimo 8 caracteres)
- **Sesiones seguras:** Express Session para manejo de autenticación con cookies
- **Variables de entorno:** Credenciales sensibles en archivo `.env` (no incluido en el repositorio)
- **Protección de rutas:** Middleware `isLogged` protege rutas administrativas
- **Sin contraseñas hardcodeadas:** Todas las validaciones se realizan contra la base de datos

## 📋 Historial de Mejoras (Código Revisado)

### Mejoras Críticas Aplicadas

1. **Seguridad**
   - Sistema de autenticación con bcrypt implementado
   - Eliminadas credenciales hardcodeadas
   - Variables de entorno configuradas correctamente

2. **Corrección de Bugs**
   - Typos corregidos: `intemsSerice` → `itemsService`, `checout` → `checkout`
   - Middleware `conn.releaseConnection()` eliminado (no existe en MySQL2)
   - Variable `db.authenticate()` indefinida eliminada
   - Exports incorrectos corregidos en `itemsServices.js`

3. **Optimización de Código**
   - Console.logs de desarrollo eliminados
   - Código comentado removido
   - Rutas limpiadas y documentadas
   - `nodemon` reemplazado por `node --watch` (nativo)

4. **Plantillas EJS**
   - Errores de sintaxis HTML corregidos
   - Formularios optimizados con validaciones
   - Links y URLs consistentes
   - Manejo de errores en vistas

5. **Documentación**
   - README completo con endpoints
   - Scripts SQL para base de datos
   - Guía de instalación detallada
   - Sección de seguridad agregada

## 👨‍💻 Autor

**Jonathan Javier Urquiza** - [@JonDev](https://github.com/JonathanUrquiza)

---

_Proyecto desarrollado para Codo a Codo 4.0 - 2023_

_Código revisado y optimizado - 2025_