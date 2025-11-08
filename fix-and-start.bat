@echo off
echo Fixing Next.js cache issues...
echo.

echo Step 1: Killing all Node processes...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo Step 2: Removing .next directory...
if exist .next (
    rmdir /S /Q .next 2>nul
    timeout /t 1 /nobreak >nul
)

echo Step 3: Removing node_modules (clean install)...
if exist node_modules (
    rmdir /S /Q node_modules 2>nul
)

echo Step 4: Reinstalling dependencies...
call npm install

echo.
echo Step 5: Starting development server...
call npm run dev

pause
