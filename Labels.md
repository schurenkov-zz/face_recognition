## Labels JSON format

Array of all labels detected in the video:

```javascript
[
{
    "Name": "Logo",   // Human readable label name (to be displayed in the UI)
    "TimeSpans": [    // Array of {timestamp,length} integer sequences (in milliseconds)
        0,            // Start timestamp #1
        5379,         // Length #1
        317317,       // Start timestamp #2
        2585          // Length #2
    ]
},
...
]
```

For example, the "Logo" label from the example above was detected from 0ms for 5379ms (0:00~0:05) and then again from 317317ms for 2585ms (5:16~5:18).

{TimeSpans} arrays always contain even number of elements.