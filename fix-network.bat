@echo off
echo ===================================================
echo   Unblocking Port 3000 in Windows Firewall...
echo ===================================================

netsh advfirewall firewall add rule name="Allow Salon Port 3000" dir=in action=allow protocol=TCP localport=3000 profile=any
powershell -Command "Set-NetConnectionProfile -InterfaceAlias 'Wi-Fi' -NetworkCategory Private -ErrorAction SilentlyContinue"

echo.
echo ===================================================
echo   DONE! Port 3000 is now open on your Wi-Fi.
echo ===================================================
pause
