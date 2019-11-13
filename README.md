# Fileforce Front-end Challenge

## Given

- A simple "ASP.NET Core 2.1" project that can be open in
    - "Visual Studio 2017/2019" (open Video.sln and press *Start* button)
    - "Visual Studio Code" (open Video folder, go to Debug tab and start *.NET Core Launch (web)*).
- If you use "Visual Studio Code", please make sure that you have installed *"C#"* extension as well as *.NET Core 2.1 SDK* from https://dotnet.microsoft.com/download/dotnet-core/2.1 for your OS.
- When started, the project automatically runs a new web server, accessible via URL: http://localhost:5000/
- The server exposes the following resources:
    - Index page: http://localhost:5000/
    - Video page with fileId parameter: http://localhost:5000/Video?fileId={fileId}
    - REST API with 4 different functions:
      - Video data in MP4 format: /api/data/video/{fileId}/mp4
      - Label data in JSON format: /api/data/video/{fileId}/labels
        - The JSON format is explained in a separate file: Labels.md
      - Person data in JSON format: /api/data/video/{fileId}/persons
        - The JSON format is explained in a separate file: Persons.md
      - Person face image in JPEG format: /api/data/video/{fileId}/faces/{faceId}
    - All files inside wwwroot directory (site.js and site.css are automatically included into Index and Video pages)
- Generally speaking, to successfully accomplish the challenge, you are supposed to edit only these files (they have TODO comments inside):
  - Pages/Video.cshtml
  - wwwroot/js/site.js
  - wwwroot/css/site.css
- However, you are completely free to add new files or edit existing ones.

## Required

- In order to successfully complete the challenge, you must implement all functionality demonstrated in the README.mp4 proof-of-concept video:
  - Implement JS/CSS/HTML code to display video player along with labels and faces (the visual design does not matter much; you may copy it from the proof-of-concept video as is or create your own design/layout/theme).
  - Implement custom clickable video timeline displayed under the video
  - All labels and faces must be selectable (only one item at a time)
  - Selected label or face must highlight related time regions on the custom video timeline
  - Video player must display the following overlays (when available):
    - person bounding boxes
    - face bounding boxes
    - face landmarks
    - list of person IDs which are visible on the current video frame
- The code is expected to be written in either vanilla JavaScript or TypeScript.
- Use of React to render UI is welcome, however, please refrain from using other JS libraries (jQuery, Zepto, etc) or 3rd-party React components.
- Since the project is very simple in terms of layout and design, please refrain from using CSS frameworks (Bootstrap, Foundation, etc).
- The solution must work in the latest versions of Firefox, Chrome and Edge without any major visual differences.
- You should use **git** to gradually commit your work into the provided repository.
- Commit summary must be written in English and should reflect your usual work style.
- **Please do not synchronize/push the repository to public services**, like github and **keep it local**.
- Feel free to ask any question related to the development environment (.NET Core) or challenge requirements.
- Good luck!