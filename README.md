# Aplicación de Gestión de Productos

## Desarrollador
**Alberto Maximiliano Hermosillo Sandoval**

## Descripción del Proyecto
Esta es una aplicación web desarrollada con **React + Vite** que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una lista de productos obtenidos desde una API pública. La interfaz es completamente responsiva y está estructurada utilizando buenas prácticas de componentes reutilizables y estado global con Zustand.

## Instalación y Ejecución Local

1. Clona el repositorio:
```bash
git clone https://github.com/albertooherm/product-app-react-alberto
```

2. Accede al directorio del proyecto:
```bash
cd product-app-react-alberto
```

3. Instala las dependencias:
```bash
npm install
```

4. Antes de ejecutar la aplicación, renombra el archivo `.env.example` a `.env` y asegúrate de configurar la URL de la API en la variable correspondiente. Por ejemplo:
```bash
VITE_API_URL=https://fakestoreapi.com
```

5. Inicia la aplicación en desarrollo:
```bash
npm run dev
```

## API Utilizada
[https://fakestoreapi.com](https://fakestoreapi.com)

## Tecnologías y Librerías Utilizadas

- **React + Vite:**
- **Zustand:**
- **React Router Dom:**
- **React Hook Form:**
- **Tailwind CSS:**
- **Vitest + React Testing Library:**

## Decisiones Técnicas

- **Zustand** fue elegido por su simplicidad frente a Redux y por mantener el store desacoplado de los componentes.
- **Hook personalizados** permiten encapsular lógica derivada del estado y mejorar la reutilización de código.
- **División clara de responsabilidades:** La lógica de negocio se encuentra separada de la presentación (hooks vs. componentes).

## Demo en Línea
[https://products-alberto.vercel.app/](https://products-alberto.vercel.app/)
