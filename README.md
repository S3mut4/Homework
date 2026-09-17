Course project — homework and lessons

///////////////////////////////////////////////////////
//
##################
Code style & naming conventions
●	Line endings without semicolons (;).
●	Consistent indentation.
●	A single, consistent quote style throughout the file.
●	Meaningful names for variables and constants.


google.github.io/styleguide/tsguide.html
github.com/airbnb/javascript
prettier.io/playground
##################
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
//#Create new project
//##################
//npm init -y          #Default Node package.json options
//npx tsc --init.      #Default TypeScript.json options
//##################
//#Modify package.json from "type": "commonjs" to "type": "module". # #enabling the native export and import syntax.
//#With this configuration, export works correctly, and I don't need to install #TypeScript separately in every project folder.
//#**Note: In TypeScript.json "types": [], With this TypeScript will not provide #autocomplete for Node.js global variables such as process.env or Buffer (Forces #explicit imports and improves performance).
//##################
//#Run typecheck command before execution
//npx tsc --noEmit
//##################
////////////////////////////////////////////////////////