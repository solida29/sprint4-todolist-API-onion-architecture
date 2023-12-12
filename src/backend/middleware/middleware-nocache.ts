import { NextFunction, Request, Response } from "express";

const noCacheMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.set("Cache-control", "no-cache");
  next();
};

/** 
res.set("Cache-control", "no-cache") es una línea de código en Express.js que establece el encabezado HTTP Cache-Control en la respuesta a no-cache.
El encabezado Cache-Control es utilizado por el navegador y los intermediarios (como los proxies) para determinar cómo y durante cuánto tiempo se puede almacenar en caché una respuesta.
El valor no-cache significa que la respuesta puede ser almacenada en caché, pero debe ser validada con el servidor antes de ser servida desde la caché. En otras palabras, antes de que el navegador muestre una versión en caché de la respuesta, debe hacer una solicitud al servidor para verificar si la respuesta ha cambiado. Si la respuesta no ha cambiado, el servidor enviará un código de estado 304 (No Modificado) y el navegador puede mostrar la versión en caché. Si la respuesta ha cambiado, el servidor enviará la nueva respuesta junto con un código de estado 200 (OK).
Esto puede ser útil si quieres asegurarte de que los usuarios siempre vean la versión más reciente de tu página, pero también quieres aprovechar el almacenamiento en caché para mejorar el rendimiento.
**/
