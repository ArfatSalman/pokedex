# Goals

- have a search feature for pokemon
  - Arbitrary search or combo box like search?
- display a grid for few pokemon
  - 3 x 3 (which are good enough to come on our home page)
    - most searched [don't-have-the-data]
    - first 9 [simple-but-very-boring]
    - random [result-dont-stay-on-next-render]
- personal pokemon page
- add to favorites (not before doing other things)
  - in the browser (localStorage is not permanent)

# folder structure

- src
  - components (all re-useable components)
  - api (all data fetching logic)
  - utils (all the fns that help us in some way)

# Implicit Goals

- Deployment

# Pages

    - Home (/)
    - Pokemon Grid (/poke-gallery)
    - Personal pokemon (/pokemon/:name_of_pokemon)
    - Contact (/contact)
