﻿# File-Search-Node-Package
Explanation:

**File:**
The package has index.js file in which I have written the code for searching in  a file.

**Dependency / Usage:**

•	This package uses  prompt.sync module to take user input. The user input depends upon the type and the way data is stored in the file. 

**•	For Example:**
  If it is text saved as names in the file as I have done in the testing it should be given as var.read(‘filepath’, ‘name’) 
  
•	If names are stored in file with space they should be given with the same space in the input.
**For example:** if in file name is : **“Ahmed Ikram”** , it should be given as **“Ahmed Ikram” **in place of **‘name’**.

**Export:**
It exports **fileRead** function as **read** that takes the **“file path”** and an input as its arguments. It uses promises to take care of asynchronous task.
