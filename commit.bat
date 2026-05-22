@echo off
cd /d "c:\Users\HP\Documents\site-cesame-elyshama"
echo === Git Status ===
git status --short
echo.
echo === Recent Commits ===
git log --oneline -5
echo.
echo === Git Diff (staged) ===
git diff --cached --stat
echo.
