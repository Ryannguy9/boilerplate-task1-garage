# PRD (Product Requirements Document)

## Feature/Main Task
  Restyled Login Page
    - Includes:
      - Improved error-state
        - Have red error-state text appear below input boxes upon submission as well
        - Error-state inputs turn red upon invalid submissions too
      - Formating/Layout change

  Team Page
    - Includes:
      - Team Name
      - Each team member's photo
      - Each team member's name
      - Each team member's role
      - Each team member's blurb

## Problem

  ### Users
    - Demo Sprint (Just group members and assessors)

  ### Pain Points
    Login Page:
      - Lack of meaningful error messages when inputs are invalid upon submission leaving users confused over what they did wrong
      - Lack of UI state change to indicate invalid form submission, only providing a pop-up which isn't too meaningful/clear

    Team Page:
      - Currently no way to view team details
    
## Proposed Solution

  ### Product Scope
  Login Page : *STYLING-ONLY*
    - Major formatting/layout changes to better improve user navigation through the page
      - This includes, increasing size of "Sign In" heading, and aligning it horizontally to start along with sub-heading
      - Moving "Continue with Google" button along with "OR" horizontal rule below regular Sign-In form to improve importance heirarchy (clearly indicating that main way to sign in is to enter your details, Google sign-in is secondary)
      - Situating Sign-In form in center of page

    - Styling Changes
      - Change background colour of "Sign In" button to provide a more clear indicator of where to submit sign in form.

    - One NON-Styling change is needed
      - Update login pathing upon successful sign-in to direct user to new "/Team" directory

  Team Page: *FULL IMPLEMENTATION*
    - Side Bar
      - Add a new "Team" tab below "Notes" tab
      - Have new path user to "(auth)/(dashboard)/Team"

    - Team Page
      - Team Page
        - Have a `<h1>` heading at the top and horziontally center of the page saying "Team <Insert Team Number>"

      - Media Queries/Screen-size specific layouts
        - < 768px
          - Team member tiles should be displayed in a single vertical column with adequate padding and layout gaps
          - For smaller screen sizes use smaller text overall
          - Have a text cut-off for team member name where it HAS to fit on one line.
          - For blurb, limit to 20 words, cut off and replace with ellipsis if it exceeds the limit
        - 768px < @ < 1024px
          - Team member tiles should be displayed in 2 vertical columns with adequate padding and layout gaps
          - Increase overall text size
          - Have a text cut-off for team member name where it HAS to fit on one line.
          - For blurb, limit to 20 words, cut off and replace with ellipsis if it exceeds the limit
        - 1024px < 
          - Team member tiles can now be displayed across 4 equal vertical columns
          - Increase text cut-off for blurb to 30 words

      - Team member "card"
        - Each team member will have their own card/tile where each card will be divided in half horziontally

          - Top Half:
            - Top half will be a photo of said team member in an `<img>` tag
            - Display rule: if no image provided, use default silhouette profile image

          - Lower Half:
            - Contains team member details, where in larger and bold text, their name with `<h2>` tag.
            - Under their name have a slightly lighter color, not bolded, their role in `<p>` tag only slightly smaller than their name in size but still larger than blurb
            - Finally, in standard `<p>`, add their blurb
            - For validation/display rules, go to Media Queries above

        - General styling for team cards/tiles
          - Upon hover, scale to 105 or 110 (To be decided)
          - Upon hover and active ensure cursor is "Pointer"

## What remains out of scope post-handover
  - ARIA/WCAG testing/checks will not be carried out (Demo Sprint).