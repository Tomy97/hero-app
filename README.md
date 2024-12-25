# Superhero App

### Objetivo

Desarrollar una aplicación para crear un equipo de superhéroes. La aplicación consumirá una API externa y mostrará diferentes atributos a nivel individual de cada miembro y del equipo consolidado.

---

### **Requerimientos técnicos**

1. Consumir la API [Superhero API](https://superheroapi.com/) en sus diferentes endpoints.
    - Autenticación a través de Facebook.
2. Proteger las diferentes secciones de la app verificando que el usuario autenticado disponga de un token almacenado en `localStorage`.
    - Redirigir al login si el usuario intenta ingresar sin estar autenticado.
3. La aplicación permitirá constituir un equipo de superhéroes interactuando con la API.

---

### **Componentes**

### **Formulario de Login**

- Renderizarse en cualquier ruta si el usuario no está autenticado.
- Contendrá:
    - Campos `email` y `password`.
    - Validaciones:
        - Ambos campos no deben estar vacíos.
        - Mostrar mensaje en caso de error.
    - Petición POST a `http://challenge-react.alkemy.org` con:
        
        ```json
        json
        Copy code
        {
          "email": "challenge@alkemy.org",
          "password": "react"
        }
        
        ```
        
        - Si ocurre un error, mostrar una alerta.
        - En caso de éxito:
            - Redirigir al Home.
            - Almacenar el token en `localStorage`.

---

### **Equipo**

- Mostrar los miembros en una grilla con:
    - Nombre del héroe.
    - Imagen.
    - Powerstats.
    - Acciones:
        - Ver detalle.
        - Eliminar del equipo.

---

### **Buscador de Héroes**

- Formulario para realizar peticiones GET al endpoint de búsqueda.
- Mostrar resultados con:
    - Imagen.
    - Nombre del héroe.
    - Botón "Agregar al equipo".

---

### **Detalle de Héroe**

- Mostrar detalles del héroe seleccionado, como:
    - Peso.
    - Altura.
    - Nombre completo.
    - Alias.
    - Color de ojos y cabello.
    - Lugar de trabajo.

---

### **Requerimientos funcionales**

1. **Home**
    - Mostrar:
        - Acumulativo de powerstats (suma de inteligencia, fuerza, etc.).
        - Categorizar el equipo según el powerstat más alto.
        - Promedio de peso y altura del equipo.
2. **Restricciones del equipo**
    - Máximo 6 miembros:
        - 3 de orientación "buena".
        - 3 de orientación "mala".
    - Validar al intentar agregar un nuevo héroe.
3. **Acciones**
    - Eliminar miembro del equipo:
        - Actualizar promedios y acumulativos.

---

### **Criterios a evaluar**

- Diseño responsive, moderno e intuitivo.
- Uso de frameworks de CSS (Bootstrap, Materialize, Bulma).
- Conocimientos básicos de React.
- Validación de formularios.
- Buenas prácticas de codificación.
- Organización de rutas.

---

### **Tests (Opcionales)**

- Verificación de usuario autenticado al ingresar a una ruta.
- Validación de campos en formularios.
- Manejo de excepciones al obtener errores de la API.