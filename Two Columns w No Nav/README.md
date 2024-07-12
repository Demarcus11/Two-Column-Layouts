# Two Column Layout

grid and minmax() are your best friends for a two column layout.

grid will split the screen into columns, for a 2 column layout we want 4 columns:

        [padding column] [content column] [content column] [padding column]

Now, we want the columns to be able to shrink and not be fixed, so we don't want to do something like set fixed column sizes like 2rem 50rem 50rem 2rem because as the screen shrinks under 50rem they will overflow. We want to utilize minmax() to set a minimum size for the columns to shrink down to and a max on large screens.

The padding columns, we want to take up the rest of the space the content isn't using, we can use fractional units to achieve this:

    grid-template-columns: minmax(2rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(2rem, 1fr)

The columns will take up as much space as they can (1fr) and can shrink down to 2rem, we don't want them to shrink to 0 because then we'll have no "padding" on the sides.

The content columns will be 30rem each for a total of 60rem for the content and both can shrink down to 0rem.

We can add gap to add space between the two content columns.
