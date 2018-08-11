using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace UsersAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<User>> List()
        {
            // in real life - retrieve from database
            var users = new List<User>{
                new User {
                    Id = 1,
                    Name = "Jon Hilton",
                    Summary = "36 / Lead Software Developer" }
            };

            return Ok(users);
        }
    }

    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Summary { get; set; }
    }
}
