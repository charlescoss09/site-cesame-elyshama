@echo off
cd /d "c:\Users\HP\Documents\site-cesame-elyshama"
echo === Staging changes ===
git add vite.config.js
echo.
echo === Creating commit ===
git commit -m "Configure Vite server to run on port 8080" -m "Set server port to 8080 and host to localhost to resolve connection refused error on localhost:8080"
echo.
echo === Pushing to GitHub ===
git push
echo.
echo === Push Complete ===
git log --oneline -3
