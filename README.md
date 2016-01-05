#What
Chrome extension for switching fonts on next.ft.com for in browser prototyping/user research.

#How
1. Clone this repository
1. In Chrome visit `chrome://extensions/`
1. Make sure "Developer mode" is checked
1. Press the "Load unpacked extension" button
1. Find the font-switch folder
1. Select it

# Modifying styles
Style rules are defined in mystyles.css. You can add rules there scoped to a style family class (such as `font-prototype-style-1`).

# Adding a new style group
To add a new style group, first open `options.html` and add a radio button to choose it.
For example, to add a new style group called `font-prototype-style-X` you would need to paste in the following:

```
<label>
  <input name='style' type="radio" value='font-prototype-style-X'>
  Style 1: [your name for style x]
</label>
```

Now, in `mystyles.css` you can add CSS rules like:

```
.font-prototype-style-X h1 {
  color: red;
}
```

You have to reload the extension for your styles take effect. To do this, visit the extension list ('chrome://extensions') and hit ⌘R.
