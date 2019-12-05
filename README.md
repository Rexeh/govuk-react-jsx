# govuk-react-jsx

View demo at https://andymantell.github.io/govuk-react-jsx/?path=/story/accordion--default

- Stop using the attributes param of govuk nunjucks (It should just spread any additional props into the element below)
- Switch to className instead of classes (Again, mirroring the govuk nunjucks too closely just isnt helpful)
- Consider general structure of props vs params - do we restructure? Or maybe create React-like adapters
- Do a proper build, so that it can be included in create react app (At the moment it doesn’t work because your webpack config needs to be set up so that babel does babeling on the code, but c-r-a doesn’t do this)
- Update to the latest govuk-frontend
- Sort out CSS - are we importing it here? Or just documenting that people need to import it themselves?
- Documentation
- Additional things like the base template?
- Additional examples from local yaml files
- Tests - particularly around interacting with components (Can we pull in from govuk-frontend somehow?)
- Demos of buttons with click events, input elements with change events etc
- Some kind of management around git tags and package versions?
