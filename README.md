# 🚀 Pokémon Explorer - Desafío Técnico (Vite + React)

<div align="center">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="Shadcn/UI"/>
</div>

<br/>

Una versión del explorador de Pokémon construida con un enfoque en los fundamentos de React, utilizando Vite para un entorno de desarrollo ultrarrápido y un manejo de estado nativo.

### Tambien puedes explorar la version `NEXT JS`: [**Pokemon explorer Next JS**](https://github.com/drbv27/pokemon-explorer-next)

---

### 📸 Captura de Pantalla

<table>
  <tr>
    <td align="center">
      Grid Desktop<br>
      <img src="https://raw.githubusercontent.com/drbv27/pkemon-explorer-react/main/public/Screen1r.png" alt="Grid Desktop" width="400"/>
    </td>
    <td align="center">
      Table Desktop<br>
      <img src="https://raw.githubusercontent.com/drbv27/pkemon-explorer-react/main/public/Screen2r.png" alt="Table Desktop" width="400"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      Grid mobile<br>
      <img src="https://raw.githubusercontent.com/drbv27/pkemon-explorer-react/main/public/Screen3r.png" alt="Grid Mobile" width="400"/>
    </td>
    <td align="center">
      Table mobile<br>
      <img src="https://raw.githubusercontent.com/drbv27/pkemon-explorer-react/main/public/Screen4r.png" alt="Table mobile" width="400"/>
    </td>
  </tr>
  </table>

---

### ✨ Demo en Vivo

Puedes explorar la aplicación desplegada aquí:

[**https://pokemon-explorer-react.vercel.app/**](https://pokemon-explorer-react.vercel.app/)

---

## ✅ Funcionalidades Implementadas

Este proyecto cumple con todos los requisitos del desafío, demostrando un sólido manejo de datos y de la UI en el cliente.

- **Dos Vistas Interactivas:** Una cuadrícula visual (`Grid`) y una potente tabla de datos (`Table`).
- **Tabla de Datos Completa:**
  - **Paginación y Ordenamiento** en todas las columnas requeridas.
  - **Filtrado por Nombre y Tipo** de Pokémon.
  - **Selector de Columnas** para personalizar la vista y reducir la carga de información.
- **Modal de Detalles:** Muestra las especificaciones completas de cada Pokémon.
- **Diseño Totalmente Responsivo** con Tailwind CSS.
- **Código Modular:** Estructurado en componentes reutilizables para una fácil mantenibilidad.
- **(Bonus) Indicadores Visuales:** Barras de estadísticas con colores para una rápida interpretación.

---

## 🏛️ Arquitectura y Decisiones Técnicas

Esta versión del proyecto se centra en utilizar los hooks nativos de React para gestionar el estado, demostrando un enfoque más fundamental en comparación con las librerías de estado externas.

### Stack Tecnológico

- **Entorno de Desarrollo:** **Vite** para un HMR (Hot Module Replacement) instantáneo y un rendimiento de desarrollo superior.
- **Librería Principal:** **React 18** con **TypeScript**.
- **UI y Estilos:** **Tailwind CSS** para estilización y **Shadcn/UI** para componentes base accesibles y personalizables.
- **Peticiones HTTP:** **Axios** para la comunicación con la PokéAPI.
- **Lógica de Tabla:** **TanStack Table** para manejar la compleja lógica de la tabla de datos (ordenamiento, filtrado, etc.) de manera "headless".

### Estrategia de Estado y Datos

- **Manejo de Estado de UI:** Se utilizaron exclusivamente los hooks nativos de React (`useState`, `useEffect`). El estado de los filtros, la paginación, la vista actual (grid/tabla) y el Pokémon seleccionado se gestionan localmente dentro de los componentes, demostrando un control preciso del ciclo de vida de React sin dependencias externas.
- **Obtención de Datos:** La lógica de fetching se encapsula dentro de un `useEffect` en el componente `App.tsx`. Se obtiene la lista inicial y luego se lanzan todas las peticiones de detalles de forma concurrente con `Promise.all` para optimizar el tiempo de carga total.
- **Decisión de Fetching:** Al igual que en la versión con Next.js, se tomó la decisión de cargar todos los datos al inicio. Esto es un requisito indispensable para poder implementar correctamente las funcionalidades de ordenamiento y filtrado en columnas como "Peso", "Altura" o "Salud".

Esta arquitectura demuestra la capacidad de construir una aplicación compleja y funcional utilizando el núcleo de React, reservando librerías externas solo para tareas muy específicas como la lógica de la tabla.

---

## ⚙️ Cómo Ejecutar el Proyecto Localmente

Para levantar una copia local de la aplicación, sigue estos sencillos pasos:

1.  **Clona el repositorio**

    ```bash
    git clone [https://github.com/tu-usuario/pokemon-explorer-vite.git](https://github.com/tu-usuario/pokemon-explorer-vite.git)
    ```

2.  **Navega al directorio del proyecto**

    ```bash
    cd pokemon-explorer-vite
    ```

3.  **Instala las dependencias**

    ```bash
    npm install
    ```

4.  **Ejecuta el servidor de desarrollo**

    ```bash
    npm run dev
    ```

5.  Abre [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite) en tu navegador.

## 📫 Contacto

[![GitHub](https://img.shields.io/badge/GitHub-drbv27-181717?logo=github)](https://github.com/drbv27)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-DiegoBonilla-0A66C2?logo=linkedin)](https://www.linkedin.com/in/diego-ricardo-bonilla-villa-7179254a/)
[![Email](https://img.shields.io/badge/Email-DiegoBonilla-D14836?logo=gmail)](mailto:drbv27@gmail.com)
