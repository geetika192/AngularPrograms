using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TokenAuthentication.Data;
using TokenAuthentication.Entites;
using System.Linq;

namespace TokenAuthentication.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BookController: ControllerBase
    {
        private readonly TokenDbContext _context;
        public BookController( TokenDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetBooks()
        {
            var data = await _context.Tblbooks.ToListAsync();
            if(data==null)
            {
                return Ok(data);
            }
           
            return Ok(data);
           
        }
        [HttpGet("{Bid}")]
        public async Task<ActionResult<Tblbook>> GetBooksDetails(int Bid)
        {
           var user=await _context.Tblbooks.FindAsync(Bid);
           if(user==null)
           {
               return NotFound();
           }
            return user;
        }
    }
}