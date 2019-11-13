## Persons JSON format

The JSON contains the following object:

```javascript
{
  // Array of all persons detected in the video.
  "PersonTimeSpans": [
    {
      // Person index, use it as {faceId} parameter
      // in REST API to get person's face image.
      "PersonIndex": 0,
      // Array of {timestamp,length} integer sequences
      // representing timespans where the person
      // was detected in the video.
      // See Labels JSON format for more details.
      "TimeSpans": [
        3879,  // Start timestamp #1
        8883,  // Length #1
        24942, // Start timestamp #2
        14138, // Length #2
        ...
      ]
    },
    ...
  ],
  // Array of all timestamps where person/face data is available.
  // The minimum interval between timestamps is defined by the {FrameStep} value.
  // If there is no person/face data available near a given timestamp
  // then related timestamp key may be absent.

  // For example, in the sample JSON below,
  // the first timestamp that has person/face data is 4316ms.
  // This means that there is nothing to display before 4.316s position.

  // All timestamp keys are multiplied by the {FrameStep} value, i.e.:
  // {TimestampKey} = {FrameStep * N}

  // For example, in the sample JSON below,
  // the next timestamp after 4316 is 4399 (4316+83=4399).

  // While video is playing, you should constantly
  // check for the current video position (in milliseconds)
  // and find the nearest available timestamp key
  // to display related person/face data overlays
  // (bounding boxes and face landmarks).

  // For example, if current video frame position is 4320ms,
  // the nearest related timestamp key would be "4316".

  // You may use the following formula to calculate the nearest key:
  // {TimestampKey} = (Math.floor(currentTime / {FrameStep})) * {FrameStep};

  // If calculated {TimestampKey} is not available in the {Timestamps}
  // dictionary then there's nothing to display on the video overlay.
  "Timestamps": {
    // Timestamp value in milliseconds that have person/face
    // data to be displayed for the next {FrameStep} number of milliseconds.
    "4316": [
      {
        // {BoundingBox} structure identifies
        // the bounding box around the person.
        // The Left (x-coordinate) and Top (y-coordinate)
        // are coordinates representing the top and left sides
        // of the bounding box. Note that the upper-left corner
        // of the frame is the origin (0,0).
        // The Top and Left values are ratios
        // of the overall frame size.
        // For example, if the input frame is 700x200 pixels,
        // and the top-left coordinate of the bounding box
        // is 350x50 pixels, the API returns a Left value
        // of 0.5 (350/700) and a Top value of 0.25 (50/200).
        // The Width and Height values represent the dimensions
        // of the bounding box as a ratio of the overall frame dimension.
        // For example, if the input frame is 700x200 pixels,
        // and the bounding box width is 70 pixels,
        // the Width is 0.1.
        "BoundingBox": {
          "Height": 0.8402778,
          "Left": 0.33984375,
          "Top": 0.0458333343,
          "Width": 0.434375
        },
        // Face details.
        // This structure is optional
        // and for some timestamps may be null.
        "Face": {
          // Face bounding box.
          "BoundingBox": {
            "Height": 0.265277773,
            "Left": 0.4578125,
            "Top": 0.102777779,
            "Width": 0.149218753
          },
          // Confidence level (in %) that the bounding box
          // contains a face (and not a different object such as a tree)
          // (NOTE: this value is optional and not required
          // for the successful challenge completion,
          // however, you are free to make use of this data
          // and display it on the video overlay too)
          "Confidence": 99.9994049,
          // Indicates the location of landmarks on the face.
          "Landmarks": [
            {
              // Type of landmark, possible values are:
              // "eyeLeft"
              // "eyeRight"
              // "nose"
              // "mouthLeft"
              // "mouthRight"
              "Type": {
                "Value": "eyeLeft"
              },
              // The x-coordinate from the top left of the landmark
              // expressed as the ratio of the width of the frame.
              "X": 0.5112852,
              // The y-coordinate from the top left of the landmark
              // expressed as the ratio of the height of the frame.
              "Y": 0.202468172
            },
            {
              "Type": {
                "Value": "eyeRight"
              },
              "X": 0.5622969,
              "Y": 0.222692
            },
            {
              "Type": {
                "Value": "nose"
              },
              "X": 0.52963,
              "Y": 0.2464014
            },
            {
              "Type": {
                "Value": "mouthLeft"
              },
              "X": 0.5066411,
              "Y": 0.292121679
            },
            {
              "Type": {
                "Value": "mouthRight"
              },
              "X": 0.5405805,
              "Y": 0.306252927
            }
          ],
          // Indicates the pose of the face as
          // determined by its pitch, roll, and yaw.
          // (NOTE: this structure is optional and not required
          // for the successful challenge completion,
          // however, you are free to make use of this data
          // and display it on the video overlay too)
          "Pose": {
            // Value representing the face rotation on the pitch axis.
            // (from -180 to +180)
            "Pitch": 13.4051208,
            // Value representing the face rotation on the roll axis.
            // (from -180 to +180)
            "Roll": 12.4401665,
            // Value representing the face rotation on the yaw axis.
            // (from -180 to +180)
            "Yaw": -1.53234267
          },
          // Identifies image brightness and sharpness
          // (NOTE: this structure is optional and not required
          // for the successful challenge completion,
          // however, you are free to make use of this data
          // and display it on the video overlay too)
          "Quality": {
            // Value representing brightness of the face.
            // (from 0 to 100)
            "Brightness": 87.07837,
            // Value representing sharpness of the face.
            // (from 0 to 100)
            "Sharpness": 94.11855
          }
        },
        // Person index.
        "Index": 0
      }
    ],
    // Next timestamp value...
    "4399": [
        ...
    ],
    ...
  // Precalculated frame step in milliseconds
  // defining minimum distance between the keys
  // in the {Timestamps} dictionary.
  "FrameStep": 83
}
```