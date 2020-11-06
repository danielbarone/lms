# Client

React UI for the LMS Project

## Styling/Theming

In order to keep the theme consistent, simplify site-wide style changes, and enable switching from dark mode to light mode -- any styling that can be reused should be defined in src/theme/theme.js

### theme.js

When defining these styles in theme.js, you must define it twice -- once for light mode and once for dark mode. Their names must be identical. If the style rule you're creating doesn't invove any color, this is as simple as copy-and-pasting the rule from dark to light or vice versa. However, if it does involve color, you'll need to alter the duplicate to match it's corresponding theme (dark or light)

You will then be able to refer to these global styles in your component's {Component}.styles.js file where you will further customize your component. Here is an example from src/components/LandingPage/LandingPage.styles.js (the "theme" param is how we access style rules defined in src/theme/theme.js):

**LandingPage.styles.js**

```
const useStyles = makeStyles((theme) => ({
 ...,
 drawerContainer: {
    backgroundColor: theme.colors.background.tertiary,
    height: '100%',
    color: theme.colors.text.primary,
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '1em',
  },
  ...
}));
...
```

**LandingPage.js**

```
...
const drawer = (
    <div className={classes.drawerContainer}>
    ...
    </div>
);
...
```

### Colors

The colors used throughout the site are also accessible from the theme.js, and their values are defined in src/assets/jss/colors.js

Please try to make use of these colors only, or speak with the team if you wish to make color changes.