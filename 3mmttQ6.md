==================================================================
CREATE REST API - STUDENT INSTRUCTIONS
==================================================================

## WHAT YOU ARE BUILDING

A small backend service using Node.js and Express. It exposes
JSON "endpoints" (URLs your code responds to) for a sample
resource that YOU choose - for example tasks, users, or products.

At minimum it must let a client CREATE a new item and READ items
back, returning JSON and correct HTTP status codes. Full CRUD
(Create, Read, Update, Delete) is preferred.

NOTE: This is a BACKEND project. There is no web page to click.
You test it by starting the server and sending requests to it
(with curl in the terminal, or a tool like Postman / Thunder
Client). The setup commands in STEP 1 are tooling - the actual
API code you write yourself in STEP 2.

QUICK REMINDER - what CRUD maps to:
Create = POST (add a new item)
Read = GET (fetch item or list of items)
Update = PUT/PATCH(change an existing item)
Delete = DELETE (remove an item)

Common HTTP status codes you will use:
200 OK - request succeeded (read/update)
201 Created - a new item was created
400 Bad Request - the client sent invalid data
404 Not Found - the item does not exist

---

## STEP 0 - FIND OUT WHERE YOU ARE (do this first!)

Open the terminal in VS Code:
Top menu -> Terminal -> New Terminal

Type this and press Enter:

    whoami && pwd

- "whoami" tells you your username.
- "pwd" tells you which folder you are currently in.

Remember the folder it prints - this is where your project should
live. Also confirm Node and npm are installed:

    node -v && npm -v

If those print version numbers, you are ready.

---

## STEP 1 - CREATE THE PROJECT (terminal setup)

Run these ONE AT A TIME in the terminal. Read what each one says
before running the next.

1.  From your working folder (STEP 0), create the project folder
    and move into it:

        mkdir create-rest-api
        cd create-rest-api

2.  Start a Node project (creates package.json):

    npm init -y

3.  Install Express:

    npm install express

4.  (Optional but helpful) install nodemon, which restarts the
    server automatically when you save changes:

        npm install -D nodemon

5.  You will create your code files in STEP 2. To RUN the server
    once it exists, use:

        node server.js

    (or, if you installed nodemon: npx nodemon server.js )
    Leave it running while you work. Press Ctrl+C to stop it.

---

## STEP 2 - WHAT TO BUILD (your API code)

This is YOUR code to write. The points below describe what is
required. Try it yourself first - that is how you learn.

CREATE THE FILES (click in the Explorer to create these): - server.js (or app.js) - the main entry file. - a "routes" folder - holds your route definitions.
Inside it, create a route file for your resource, for
example "routes/tasks.js".

IN server.js (the entry file), your code should: - Import Express and create an app. - Add the built-in JSON body parser so the server can read
JSON that clients send (look up "express.json()"). - Connect your route file to a base path
(look up "app.use" with a router). - Start listening on a port (for example 3000) and print a
message so you know it is running.

IN your routes file, define the endpoints for your resource.
Use Express's Router to organise them. At minimum: - A GET route that returns your list of items as JSON. - A POST route that adds a new item from the request body and
returns the created item.
Preferred (full CRUD), also add: - A GET route for a single item by its id. - A PUT (or PATCH) route to update an item. - A DELETE route to remove an item.

STORING DATA:
You do NOT need a database for this project. You can keep your
items in a simple array in memory (the data resets when the
server restarts - that is fine for this assignment).

RESPONSES: - Always send JSON back (look up "res.json"). - Set the right status code (look up "res.status"). For
example, return 201 when you create something, and 404 when
an item is not found.

THINK ABOUT: - Where will you keep the list of items so all routes can use
it? - How do you read the data a client sent in a POST?
(the request body) - How do you find one item by its id, and what should happen
if it does not exist?

---

## STEP 3 - RUN AND TEST YOUR API

Start the server in the terminal:

    node server.js

(or: npx nodemon server.js )

You should see your "server running" message and NO errors. Then,
in a SECOND terminal (click the "+" in the terminal panel to open
another one), test your endpoints. Examples - adjust the path to
match your resource:

Read all items:

      curl http://localhost:3000/tasks

Create an item (sends JSON):

      curl -X POST http://localhost:3000/tasks \
        -H "Content-Type: application/json" \
        -d '{"title":"My first task"}'

You should get JSON back. For the POST, you should get the new
item and a 201 status. To SEE the status code, add -i to curl:

      curl -i http://localhost:3000/tasks

Test each endpoint you built, including a request for an item
that does not exist (you should get 404, not a crash).

---

## STEP 4 - CHECK YOUR WORK (run this before submitting!)

STOP the server first if it is running (Ctrl+C). In the terminal,
make sure you are inside your project folder:

    cd create-rest-api

Then copy and paste this whole block and press Enter:

----------------- COPY FROM HERE -----------------
echo "Checking your project..."
test -f package.json && echo "PASS: package.json exists" || echo "FAIL: package.json missing"
ls server.js app.js 2>/dev/null | grep -q . && echo "PASS: entry file (server.js or app.js) exists" || echo "FAIL: server.js (or app.js) missing"
test -d routes && echo "PASS: routes folder exists" || echo "FAIL: routes folder missing"
grep -q 'express' package.json && echo "PASS: express is a dependency" || echo "FAIL: express not in package.json"
test -d node_modules && echo "PASS: dependencies installed (node_modules)" || echo "FAIL: run 'npm install'"
grep -rEq "require\(['\"]express['\"]\)|from ['\"]express['\"]" . --include=_.js --exclude-dir=node_modules && echo "PASS: express is imported in code" || echo "FAIL: express not imported in any .js file"
grep -rEq '\.get\(|\.post\(|\.put\(|\.patch\(|\.delete\(' . --include=_.js --exclude-dir=node_modules && echo "PASS: route handlers found" || echo "FAIL: no route handlers (.get/.post/...) found"
grep -rEq 'res\.json|res\.status' . --include=_.js --exclude-dir=node_modules && echo "PASS: JSON / status responses found" || echo "FAIL: no res.json or res.status found"
grep -rEq '\.listen\(' . --include=_.js --exclude-dir=node_modules && echo "PASS: server listens on a port" || echo "FAIL: no app.listen found"
echo "Check complete."
------------------ TO HERE ------------------

---

## HOW TO KNOW YOU PASSED

After running the check block, read the output carefully.

- If EVERY line starts with "PASS:", your project has all the
  required pieces. You should see 9 PASS lines and no FAILs.

- If ANY line starts with "FAIL:", that line tells you what is
  missing. For example:
  "FAIL: no route handlers (.get/.post/...) found"
  -> add routes such as a GET and a POST handler.
  "FAIL: no res.json or res.status found"
  -> make your routes send JSON back and set status
  codes.
  "FAIL: express not in package.json"
  -> re-run: npm install express

IMPORTANT: These checks only confirm the required PIECES are
present. They do NOT prove your API actually works. You MUST
start the server (STEP 3) and send real requests with curl to
confirm the endpoints return correct JSON and status codes, and
that the server starts with NO errors.

Fix whatever failed, save the file (Ctrl+S), and run the check
block again. Repeat until all 9 lines say PASS.

---

## STEP 5 - SUBMIT

1. Make sure all your files are SAVED (no white dots on tabs).
2. Confirm the check block shows all PASS.
3. Confirm the server starts cleanly and your endpoints respond
   correctly when tested with curl.
4. Write a README.md that includes:
   - how to install dependencies (npm install)
   - how to run the API (node server.js)
   - a list of your endpoints with a sample request and a
     sample JSON response for each.
5. Push your project to GitHub and submit your repository link.

TIP: Do NOT push "node_modules" to GitHub. Create a file named
".gitignore" containing a line with: node_modules

---

## COMMON PROBLEMS

"Permission denied" when creating the folder
-> You are in a folder you cannot write to. Run "pwd" and
build inside the folder it shows.

"Cannot find module 'express'"
-> You did not install it, or you are in the wrong folder.
Run "npm install express" inside your project folder.

"Error: listen EADDRINUSE" (port already in use)
-> The port is taken, often by an old server still running.
Stop other servers (Ctrl+C), or use a different port.

POST request body is "undefined"
-> You forgot to enable the JSON body parser. Add
express.json() to your app before your routes.

curl request seems to hang
-> Make sure the server is running in another terminal and
that the URL/port matches what your server prints.

The terminal seems stuck after "node server.js"
-> That is normal - the server stays running. Open a second
terminal to test it. Press Ctrl+C to stop the server.

==================================================================
END OF INSTRUCTIONS
==================================================================
