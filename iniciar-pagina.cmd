@echo off
setlocal
cd /d "%~dp0hotel-ucla-center"
where node >nul 2>&1
if errorlevel 1 (
  echo No se encontro Node.js. Pide al agente revisar la instalacion.
  pause
  exit /b 1
)
where npm.cmd >nul 2>&1
if errorlevel 1 (
  echo No se encontro npm. Pide al agente revisar la instalacion.
  pause
  exit /b 1
)
if not exist node_modules\vite\bin\vite.js (
  echo Faltan dependencias. Pide al agente terminar la instalacion del proyecto.
  pause
  exit /b 1
)
echo La vista local estara en http://127.0.0.1:3000
echo Conserva esta ventana abierta mientras revisas la pagina. Ctrl+C la detiene.
call npm.cmd run dev
if errorlevel 1 pause
endlocal
