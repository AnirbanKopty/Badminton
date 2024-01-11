## CardsUI

Data file                  : "data.js"  
which is processed by      : "utility.js"  
to feed into               : "cards.js"  
which calls functions from : "inject.js"  
to populate cards in html

## Points table calculation

Each team wins +1 for each round won.  
After the match ends, the score difference in total will be added/subtracted from winner/loser team.  
This is to avoid degeneracy in the points table.  
Also, each team gets +1 for at least playing a match this is to avoid non-participated teams to get on top of the teams who lost.  

`console` outputs are provided for checking of calculations.

## For maintainers

- Data for `mixed double` need male participant to be 1st member of the team.
- For `double` or `mixed double`, to handle duplicates (quickfix), the partner's category is modified to remove `'double'` or `'mixed double'`. For this to work correctly in all cases,   
maintainer needs to put the data entry of player before partner in the `players` variable, or, make the schedule entry like that.

> For later:
> calculating points each time browser loads.
> Not good - we should maintain a data file (json) and update the file.
