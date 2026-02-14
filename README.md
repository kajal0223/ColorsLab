## COLORS Application - LAMP Stack
## Description
The COLORS application is a personalized color management tool that demonstrates a full LAMP (Linux, Apache, MySQL, PHP) stack integration. It features a secure user login system that allows individuals to maintain their personal list of colors. Implemented features include account authentication, the ability to search for specific colors within a user's list, and functionality to add new colors directly to the database.

## Technologies Used
-	**Frontend**: HTML5, CSS3, and JavaScript
-	**Backend**: PHP for API endpoint logic
-	**Database**: MySQL for data storage of users and colors
-	**Web Server**: Apache running on an Ubuntu Linux server
- **Security**: MD5 hashing for client-side password protection

## High-level Setup Instructions
## Phase 1: Digital Ocean + Lamp
**1. Remote Server Creation (DigitalOcean)**

Log in to DigitalOcean and create a new LAMP Droplet via the Marketplace (Ubuntu 20.04). Select the Basic plan at the $7/month tier. Create a secure root password during the provisioning process and store it safely. Once the droplet provisioning is complete, click "Get started" to view your public IP address.

**2. Initial Server Configuration (SSH)**

Connect to your server using SSH (via Command Prompt or PuTTY) by running: `ssh root@YourDomainOrIPAddress`

The pre-installed LAMP stack includes MySQL, Apache, and PHP. 

Navigate to the web root directory: `cd /var/www/html`

Use the vi editor to modify the default `index.html`. Enter Insert mode, add a simple test message (`We love COP 4331`), then save and quit by pressing ESC and typing `:wq`

Verify the page displays correctly by visiting http://YourIPAddress in your web browser.

**3. Domain Registration & DNS**

Purchase a domain name through a registrant such as GoDaddy. Access your domain's DNS Manager and update the 'A' record to point to your DigitalOcean Droplet's public IP address. Test the connection in a browser using your domain name. 

## Phase 2: Database
**1. Database & Table Creation**

Log in to MySQL from your server command line: `mysql -u root -p` 

Enter the root password created during the Droplet provisioning.

Create the application database: 

`create database COP4331;`

`use COP4331;`

Create the Users and Colors tables with the data from *Getting Started with Lamp.pdf*.

Confirm tables exist by running:

`select * from Users;`

`select * from Colors;`

**2. Security & API Access**

Create a database user for the web application logic: 

`create user 'TheBeast' identified by 'Your_Secret_Password';`

Grant the new user access to the application data:

`grant all privileges on COP4331.* to 'TheBeast'@'%';`

Ensure the password used here matches the one defined in your PHP connection strings.

**3. Directory Hierarchy & File Preparation**

Navigate to `/var/www/html` and create the necessary sub-directories:

`mkdir css`
  
`mkdir images`
  
`mkdir js`
  
`mkdir LAMPAPI` (or `api`)

## Phase 3: Create API Endpoints 

**1. Backend Configuration (PHP)**

Before uploading, you must edit the connection string in each of your PHP files (`Login.php`, `AddColor.php`, and `SearchColors.php`).

Locate the mysqli connection line and update it with your database user and name:

`$conn = new mysqli("localhost", "TheBeast", "Your_Secret_Password", "COP4331");`

**2. File Upload**

Use FileZilla or PSFTP to transfer files from your local machine to the server. Upload the API files to `/var/www/html/LAMPAPI/`

**Command Reference (PSFTP):**

`open yourdomain.com`

`cd /var/www/html/LAMPAPI`

`put "AddColor.php"`

`put "Login.php"`

`put "SearchColors.php"`

**3. API Testing**

Before testing the frontend, verify that your endpoints are reachable. Use Postman, ARC, or cURL to send test requests.

**Test Endpoints:**

`http://yourdomain.com/LAMPAPI/Login.php` (Requires login/password JSON)

`http://yourdomain.com/LAMPAPI/AddColor.php` (Requires userId/color JSON)

`http://yourdomain.com/LAMPAPI/SearchColors.php` (Requires userId/search JSON)

**4. Frontend Deployment**

Once the API is verified, upload the user interface files to the web root:

-	**Styles:** Upload `styles.css` to `/var/www/html/css/`

-	**Logic:** Upload `code.js` and `md5.js` to `/var/www/html/js/`

-	**Assets:** Upload `background.png` to `/var/www/html/images/`

-	**Pages:** Upload `index.html` and `color.html` directly to `/var/www/html/`

## How to Run and Access the Application

1.	Navigate to your domain or server IP address in a web browser (e.g., `http://yourdomain.com/index.html`)
   
2.	Log in using an existing user account from the Users table
   
3.	After a successful login, you will be redirected to the color dashboard (`color.html`)
   
4.	Use the "Search" field to filter colors or the "Add" field to save new colors to your account

## Assumptions and Limitations

-	**Assumptions:** It is assumed that the environment is a Linux-based server and that the client browser supports JavaScript and cookies for session management

-	**Limitations:** This version utilizes MD5 for password hashing (more secure algorithms are recommended for production environments)

## AI Assistance Disclosure
This project was developed with assistance from generative AI tools:
- **Tool**: Gemini 3
- **Dates**: February 13-14, 2026
- **Scope**: Assisting with GitHub repository organization, frontend logic refinement, and `README` documentation for the COLORS Lab project
- **Use**:
  
1. Assisted in updating the `urlBase` variable in `code.js` to use relative paths for better server portability

2. Assisted in drafting the project description and setup instructions 

3. Provided step-by-step instructions for adding a `LICENSE` file and organizing the `public/` and `api/` directory structure
