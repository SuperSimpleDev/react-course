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

---

**Problem:** `npm` does not work on Windows<br>
**Solution:** check the nodejs troubleshooting steps here: https://github.com/SuperSimpleDev/installation-instructions/blob/main/nodejs.md#troubleshooting

## Lesson 10 (AWS Troubleshooting Guide)
If you have any issues that are not mentioned here, please let me know in the comments and I will update this.

### Unable to Create an AWS Account
If you cannot create an AWS Account, we can use a different service like https://render.com <br>

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

8. Open https://render.com and create an account / login.

9. In the Project section, click "Deploy a Web Service".

10. Connect your GitHub account, and select the repository that you just uploaded your code to > Click 

11. In "Build Command", put this command:
```bash
cd ecommerce-backend && npm install && cd ../ecommerce-project && npm install && npm run build && mv dist ../ecommerce-backend
```
(**Note:** If you followed the video and updated `vite.config.js`, you don't need the last part `&& mv dist ../ecommerce-backend`, so you can remove it).

12. In "Start Command", put this command:
```bash
cd ecommerce-backend && npm start
```

13. Select the Free Tier > click "Deploy Web Service"

14. After the Deploy is finished, click the URL at the top and it should open the ecommerce project.

#### Add a domain name in render.com
1. First, you'll need to purchase a domain name. If you don't have one, I recommend purchasing from Namecheap: https://namecheap.pxf.io/jeDGga
(This is an affiliate link. If you buy a domain using this link, part of your purchase will support SuperSimpleDev. Thank you!)

2. Then in render.com, open the settings for your Web Service.

3. In the "Custom Domains" section, enter your domain name, Save.

4. render.com should give you some instructions on how to verify you domain:

<img width="500px" src="https://github.com/user-attachments/assets/745bf6d8-61c0-4c53-8207-ed89a7e2042a" />

5. To verify the domain. Go to Namecheap, open your dashboard > click "Domain List" > find your domain name > click "Manage".

6. In the Settings, in the "Nameservers" section, make sure it is set to "Namecheap BasicDNS" (if you changed it, click "Save").

7. Open the "Advanced DNS" settings at the top.

8. Then, follow the first instruction provided by render.com. Click "Add new record" > select "A Record" > set Host to `@` (in other domain companies you may need to leave this as blank) > for the Value, enter the ip address provided by render.com (it should look something like `216.24.57.1`).

9. Follow the second instruction provided by render.com. Click "Add new record" > select "CNAME Record" > set Host (or subdomain) to "www" > for the Value, enter the URL provided by render.com (it should look something like `test-repo-6-r7mu.onrender.com`).

10. Click "Save All Changes", go back to render.com and click "Verify"
 
11. Now if you enter your domain name in the URL, it should open the ecommerce project (note: this can take a few minutes or up to 24 hours so we just need to be patient).

#### Add a separate database in render.com
We can also put the database on a separate computer.
1. Go to the render.com dashboard.
   
2. Click `Add new` > select `Postgres`. `postgresql` is a type of database (similar to mysql if you know it)

3. Give it name > click "Create database"

4. In the settings for the database > scroll down to "Connections". These are the credentials that `ecommerce-backend` will use to connect to this database.

5. In a new tab, open the settings for the Web Service you created earlier in render.com.

6. In the sidebar, click "Environment"

7. In "Environment Variables" > click "Add" > click "New variable"

8. Enter these values (you'll need to create multiple enironment variables):
```
Key: DB_TYPE
Value: postgres

Key: RDS_DB_NAME
Value: <In the database settings, in Connections, copy-paste the value of "Database">

Key: RDS_USERNAME
Value: <In the database settings, in Connections, copy-paste the value of "Username">

Key: RDS_PASSWORD
Value: <In the database settings, in Connections, copy-paste the value of "Password">

Key: RDS_HOSTNAME
Value: <In the database settings, in Connections, copy-paste the value of "Hostname">

Key: RDS_PORT
Value: <In the database settings, in Connections, copy-paste the value of "Port">
```

9. Click "Save, Rebuild, and Deploy"

10. The ecommerce project should now be using the postgres database on a separate computer.
