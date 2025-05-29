## Troubleshooting
Below is a list of issues and fixes for this course.

## Lesson 5
**Problem:** `mkdir test` does not create a folder named `test` in the project.<br>
**Solution:** it may have created the `test` folder at another location on your computer.
1. Open the VSCode settings by clicking the gear in the bottom-left > Settings.<br><img src="https://github.com/user-attachments/assets/03655adb-afd1-408f-8ac7-60a0217f90c7" alt="VSCode settings" width="300"/>
2. Search for the setting "cwd".<br><img src="https://github.com/user-attachments/assets/b5ddea6a-16d1-43f8-81d7-4a6698dd3b39" alt="VSCode settings" height="300"/>
3. Make sure `Terminal > Integrated: Cwd` is blank.
4. Try `mkdir test` again.
5. If that doesn't work, change `Terminal > Integrated: Cwd` to `${workspaceFolder}` and try `mkdir test` again.

## Lesson 10 (AWS Troubleshooting Guide)
If you have any issues that are not mentioned here, please let me know in the comments and I will update this.

### Unable to Create an AWS Account
If you cannot create an AWS Account, you can follow these steps to deploy the App on another service https://render.com

1. First, you'll need to upload your code to GitHub.
2. Create / login to your GitHub Account https://github.com
3. Create a new repository. Click your profile image in the top-right > click "Your repositories" > click "New" > Give the repository a name > set it to "Public".
4. Create an access token. Click your profile image in the top-right > click "Settings" > in the sidebar click "Developer Settings" > click "Personal access tokens" > click "Fine-grained tokens" > click "Generate new token" > give the token a name > in "Repository Access", click "All repositories" > expand "Repository permissions" > scroll down to "Contents" change access to "Read and write" > click "Generate token" > copy the token and keep it somewhere safe.
5. Go back to VSCode, in the react-course folder, in the command line, run:
```bash
git remote add origin https://<github_username>@github.com/<github_username>/<repository_name>.git
```
Make sure to replace `<github_username>` and `<repository_name>` with our GitHub username and Repository Name.
6. Run this code to upload your code to GitHub:
```bash
git push origin main
```
It might ask you to log into GitHub or at the top of VSCode it will ask you for the access token (in this case, paste the access token created earlier).
7. Now if you open your github repository https://github.com/<github_username>/<repository_name> your code should be uploaded to GitHub.
