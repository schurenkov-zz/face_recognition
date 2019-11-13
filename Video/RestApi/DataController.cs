using System.Diagnostics.CodeAnalysis;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace Video.RestApi
{
    [Route("api/data")]
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class DataController : Controller
    {
        readonly IHostingEnvironment _hostingEnvironment;

        public DataController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        IActionResult GetObject(string key, string contentType)
        {
            string filePath = Path.Combine(_hostingEnvironment.WebRootPath, "data", key);
            return File(System.IO.File.Open(filePath, FileMode.Open, FileAccess.Read, FileShare.Read),
                contentType, enableRangeProcessing: true);
        }

        [ResponseCache(Duration = 86400)]
        [HttpGet("video/{fileId}/mp4")]
        public IActionResult GetVideoFile(string fileId)
        {
            return GetObject($"{fileId}.mp4", "video/mp4");
        }

        [ResponseCache(Duration = 86400)]
        [HttpGet("video/{fileId}/faces/{personIndex}")]
        public IActionResult GetVideoPersonFaceImage(string fileId, int personIndex)
        {
            return GetObject($"{fileId}.face.{personIndex}.jpg", "image/jpeg");
        }

        [ResponseCache(Duration = 86400)]
        [HttpGet("video/{fileId}/labels")]
        public IActionResult GetVideoLabels(string fileId)
        {
            return GetObject($"{fileId}.labels.json", "application/json");
        }

        [ResponseCache(Duration = 86400)]
        [HttpGet("video/{fileId}/persons")]
        public IActionResult GetVideoPersons(string fileId)
        {
            return GetObject($"{fileId}.persons.json", "application/json");
        }
    }
}
