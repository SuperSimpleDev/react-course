## Lesson 5 Troubleshooting
**Problem:** `mkdir test` does not create a folder named `test` in the project.<br>
**Solution:** it may have created the `test` folder at another location on your computer.
1. Open the VSCode settings by clicking the gear in the bottom-left > Settings.<br><img src="https://github.com/user-attachments/assets/03655adb-afd1-408f-8ac7-60a0217f90c7" alt="VSCode settings" width="300"/>
2. Search for the setting "cwd".<br><img src="https://github.com/user-attachments/assets/b5ddea6a-16d1-43f8-81d7-4a6698dd3b39" alt="VSCode settings" height="300"/>
3. Make sure `Terminal > Integrated: Cwd` is blank.
4. Try `mkdir test` again.
5. If that doesn't work, change `Terminal > Integrated: Cwd` to `${workspaceFolder}` and try `mkdir test` again.
