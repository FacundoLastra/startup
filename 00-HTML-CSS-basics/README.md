#Topic 0 "Basics of HTML and CSS"


##2.3 Specificity answers

6) How could you add weight to the global font definition to win over the classes added by point 3?

    If you selected the html element to declare the global definition, you would have to change it to the Universal Selector * and add !important to the declaration.

    Ex: 
    ```
    * {
        font-family: 'Open Sans',serif !important;
        font-size: 14px !important;
    }
    ```

    Another way could be to add the style property directly in the html although it is not recommended and is considered an anti-pattern.

7)Imagine there is a declaration like class=”oh-no-inline-styles” style=”background:red” and you need to 
  change the background to green without changing the inline style. How could you accomplish this?

    Adding !important to the declaration of css, is the only way to have more weight than a style statement

    Ex:
    ```
    .oh-no-inline-styles {
        background-color: green !important;
    }
    ```

###Repository whit the exersides

    [Github Repository](https://github.com/intii/css-lab)
