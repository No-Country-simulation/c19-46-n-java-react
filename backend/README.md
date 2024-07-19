# 🚀 Backend
Este es el proyecto backend.

## 💻 Tecnologías utilizadas
- Java 17
- Spring Boot 3.2.8
- MySQL

## 🛠️ Requistos

### Software
- Java 17
- Maven
- MySQL
- Git

### Herramientas de desarrollo
-** IDE**: Se recomienda usar un entorno de desarrollo integrado (IDE) como IntelliJ IDEA, Eclipse o Visual Studio Code con soporte para Java y Spring Boot.

### Dependencias

- Spring Data JPA
- Spring Security
- Spring Web
- Lombok

## 🌐 Como clonar

Comando para clonar:
```bash
cd existing_folder
git clone [LINK DEL REPOSITORIO]
```
## 📦 Instalación

### Instalación de la JVM

1. **Descargar e instalar el JDK:**
   - Visita la página oficial de [Oracle JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) o [OpenJDK](https://openjdk.java.net/install/) para descargar el JDK.
   - Sigue las instrucciones de instalación específicas para tu sistema operativo.

2. **Verificar la instalación:**
   - Abre una terminal y ejecuta:
     ```sh
     java -version
     ```
   - Deberías ver información sobre la versión del JDK instalado.

### Instalación de IntelliJ IDEA

1. **Descargar IntelliJ IDEA:**
   - Visita la página oficial de [IntelliJ IDEA](https://www.jetbrains.com/idea/download/) y descarga la versión Community (gratuita) o la versión Ultimate (de pago).

2. **Instalar IntelliJ IDEA:**
   - Sigue las instrucciones de instalación específicas para tu sistema operativo.

3. **Configurar IntelliJ IDEA:**
   - Abre IntelliJ IDEA y selecciona "New Project".
   - Elige "Spring Initializr" y configura el proyecto con las siguientes dependencias: Spring Web, Spring Security, Spring Data JPA, MySQL Driver.
   - Configura el SDK de Java en la configuración del proyecto.

### Instalación y configuración de MySQL

1. **Descargar e instalar MySQL:**
   - Visita la página oficial de [MySQL](https://dev.mysql.com/downloads/mysql/) y descarga el instalador adecuado para tu sistema operativo.
   - Sigue las instrucciones de instalación.

2. **Configurar MySQL:**
   - Durante la instalación, se te pedirá que configures la contraseña del usuario `root`. Recuerda esta contraseña ya que la necesitarás más adelante.
   - Completa la instalación.

3. **Crear una base de datos:**
   - Abre el cliente MySQL (MySQL Workbench o la línea de comandos).
   - Conéctate al servidor MySQL utilizando el usuario `root` y la contraseña configurada.
   - Ejecuta el siguiente comando para crear una nueva base de datos:
     ```sql
     CREATE DATABASE nombre_base_de_datos;
     ```

