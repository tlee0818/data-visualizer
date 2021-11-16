# Plan

## Tasks for Implementation (initial backlog)
#### Create main framework method to call to Clarifai API
- Estimated Effort: easy
#### Create main framework method to handle Clarifai Response
- Estimated Effort: easy
#### Create main framework method to handle user queries
- Estimated Effort: hard
#### Create main framework method to handle displayPlugin charts in html form
- Estimated Effort: medium
- Dependency: Chart GUI page
#### Create pluginloader to load plugins to API
- Estimated Effort: medium
#### Create gui for user to query images
- Estimated Effort: hard
#### Create gui for user to see color analysis results
- Estimated Effort: hard
#### Create example data plugins
- Estimated Effort: medium
#### Create example display plugins
- Estimated Effort: medium

## Task Assignments
### Main framework (including pluginloader)
- Primary: Tak-Ho Lee
- Secondary: Inho Kang

### Plugins (data and display) 
- Primary: Inho Kang
- Secondary: Philip Kaufholz
### GUI (Frontend)
- Primary: Philip Kaufholz
- Secondary: Tak-Ho Lee

Task assignments are not strictly enforced. However, there is one person principally responsible for each artifact of the project.


## Internal deadlines
- Nov 18: Initial Interfaces for main framework and plugins
- Nov 19:
    - Framework: calling/handling Clarifai API responses, handling user queries
    - Plugins: at least two data plugins and one display Plugin
    - GUI: draft of query images page
- Nov 20:
    - Framework: forwarding displayPlugin's HTML to GUI
    - Plugins: all plugins done
    - GUI: all parts of GUI functioning
- Nov 21:
    - Framework testing
    - GUI testing
    - Documentation
    - Submission

## Process Plan
### Development Process and Toolset Decisions:
- For every bug/task, complete the following steps:
    - Create an issue
    - Assign yourself
    - Make a pull request and assign all other team members as reviewers
    - Merge after at least one person has reviewed
- Use/create relevant tags for issues
### Overall Development Activities
- Commit frequencies: Small commits (~100 lines) for ease in reviewing
- Branch by artifacts (how parts will be integrated)
- Spend time breaking down tasks and implementing them sequentially/working with the team to assign issues and fix them (for design)
- Work with GitHub projects to see which tasks need to be completed (Kanban)
- CI testing will be done with Github Actions

