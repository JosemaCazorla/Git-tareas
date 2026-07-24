## Ejercicios de Lógica y Algoritmos

### 1. El Buscador de Valores Únicos (for)

Tienes un array con números repetidos. Crea un nuevo array llamado `unicos` que contenga cada número del original, pero **sin repeticiones**.

```javascript
const numeros = [1, 2, 2, 3, 4, 4, 5, 1, 6];
```

#### 2. El Separador de Tipos (for)

Tienes un array mixto. Recorre el array y separa los elementos en dos arrays distintos: `soloNumeros` y `soloStrings`.

```javascript
const mixto = ["Hola", 10, "Mundo", 25, 40, "Javascript", true];
```

#### 3. El Transformador de Textos (for)

Dado un array de palabras, crea un nuevo array donde todas las palabras tengan su primera letra en mayúscula y el resto en minúscula.

```javascript
const palabras = ["jAvAsCrIpT", "pRoGrAmAcIoN", "eJeRcIcIo"];
```

#### 4. Análisis de Temperaturas (for)

Dado un array que representa las temperaturas de la semana, encuentra la **temperatura máxima** y la **temperatura mínima**.

```javascript
const temperaturas = [18, 22, 15, 28, 12, 25, 19];
```

#### 5. El Codificador Simple (for)

Crea un programa que recorra un array de números y genere un nuevo array donde cada número sea multiplicado por sí mismo (el cuadrado), pero **solo si es un número par**. Si es impar, el valor debe permanecer igual.

```javascript
const datos = [1, 2, 3, 4, 5, 6, 7, 8];
```

#### 6. El Buscador de "La Frase Secreta" (while)

Tienes un array de strings. Debes recorrerlo y detenerte apenas encuentres la palabra "objetivo". Cuando la encuentres, imprime su índice y rompe el ciclo inmediatamente.

```javascript
const palabras = ["manzana", "perro", "objetivo", "casa", "sol"];
```

#### 7. La Batería del Robot (while)

Imagina que un robot tiene una batería inicial de 100%. Cada tarea que realiza consume una cantidad aleatoria de energía (entre 5 y 20).

- **Reto:** Cuenta cuántas tareas logró realizar antes de apagarse.

```javascript
let bateria = 100;
```

#### 8. La Calculadora de Conversión (function)

Crea una función llamada `convertirAMinutos` que reciba un número de horas y retorne la cantidad equivalente en minutos.

- **Reto:** Invoca la función con diferentes valores y muestra el resultado en consola.
- **Pista:** `minutos = horas * 60`.

#### 9. El Comparador de Edad (function)

Crea una función llamada `puedeVotar` que reciba una edad (número) y retorne `true` si la persona tiene 18 años o más, y `false` en caso contrario.

#### 10. El Calculador de Descuentos (function)

Crea una función llamada `calcularPrecioFinal` que reciba dos parámetros: `precioOriginal` y `porcentajeDescuento`. La función debe retornar el precio final después de aplicar el descuento.
