# vimflowy?? #

## TODO ##

break up tests into multiple files...

style stuff better

yc -> clone?

gp = go parent?
rethink fold hotkeys (z+coaCOA)?

implement some form of marks (m[a-z] or m[string]?  'a or '[string])
implement J
implement ctrl+o
find/replace?
line numbers?

if 2 tabs are open, should it sync?

## KNOWN ISSUES: ##

- e/b/w don't cross onto next line

Known (intentional) inconsistencies with vi:
- undoing operations always puts your cursor where it was.  (This is not true in vim: try going to the middle of a line and typing d0u)
- in vim, cw works like ciw, which is inconsistent/counterintuitive
- 5$ doesn't work
- 100rx will replace as many as it can
- t and T work when you use them repeatedly
- I goes to the beginning of the line, irrespective of whitespace
- yank (y) never moves the cursor (in vim, yb and yh move the cursor to the start of the yank region)

## CONTRIBUTE: ##

