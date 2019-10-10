
## How to use VS code snippets

```
cmd + shift + p (bring up command options)
type 'snip'
select 'Configure User Snippets' from the options
select 'New Global Snippets File' from the options
type 'test snippets' as the file name
copy and paste the snippets from test-snippets.json in this repo into the new file
```

## How to create snippets

Place your test workspace snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
description. Add comma separated ids of the languages where the snippet is applicable in the scope field. 

If scope is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
used to trigger the snippet and the body will be expanded and inserted. 

Possible variables are: $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
Placeholders with the same ids are connected.

see also:

https://marketplace.visualstudio.com/items?itemName=spoonscen.es6-mocha-snippets

https://snippet-generator.app/
