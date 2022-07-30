using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using backend.Configuration;
using backend.Data;
using backend.Models;
using backend.Models.DTOs.Requests;
using backend.Models.DTOs.Responses;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace backend.Controllers
{
    [EnableCors("JomblePolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly JwtConfig _jwtConfig;

        private readonly JombleContext _context;

        public AuthController(
            JombleContext context,
            IOptionsMonitor<JwtConfig> optionsMonitor)
        {
            _context = context;
            _jwtConfig = optionsMonitor.CurrentValue;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest user)
        {
            if (ModelState.IsValid)
            {
                // We can utilise the model
                var existingUser = await _context.Users!.FirstOrDefaultAsync(u => u.Email == user.Email);

                if (existingUser != null)
                {
                    return BadRequest(new AuthResponse()
                    {
                        Errors = new List<string>() {
                                "Email already in use"
                            },
                        Success = false
                    });
                }

                var newUser = new User() { Email = user.Email, FirstName = user.FirstName, LastName = user.LastName, Password = user.Password };

                _context.Users!.Add(newUser);
                await _context.SaveChangesAsync();

                var jwtToken = GenerateJwtToken(newUser);

                return Ok(new AuthResponse()
                {
                    Success = true,
                    Token = jwtToken
                });
            }

            return BadRequest(new AuthResponse()
            {
                Errors = new List<string>() {
                        "Invalid payload"
                    },
                Success = false
            });
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest user)
        {
            if (ModelState.IsValid)
            {
                var existingUser = await _context.Users!.FirstOrDefaultAsync(u => u.Email == user.Email);

                if (existingUser == null)
                {
                    return BadRequest(new AuthResponse()
                    {
                        Errors = new List<string>() {
                                "Invalid login request"
                            },
                        Success = false
                    });
                }

                var isCorrectPassword = existingUser.Password == user.Password;

                if (!isCorrectPassword)
                {
                    return BadRequest(new AuthResponse()
                    {
                        Errors = new List<string>() {
                                "Invalid login request"
                            },
                        Success = false
                    });
                }

                var jwtToken = GenerateJwtToken(existingUser);

                return Ok(new AuthResponse()
                {
                    Success = true,
                    Token = jwtToken
                });
            }

            return BadRequest(new AuthResponse()
            {
                Errors = new List<string>() {
                        "Invalid payload"
                    },
                Success = false
            });
        }

        private string GenerateJwtToken(User user)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes(_jwtConfig.Secret!);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("id", user.id.ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email!),
                    new Claim(JwtRegisteredClaimNames.Sub, user.Email!),
                    new Claim("firstName", user.FirstName!),
                    new Claim("lastName", user.LastName!),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                }),
                Expires = DateTime.UtcNow.AddHours(6),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = jwtTokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = jwtTokenHandler.WriteToken(token);

            return jwtToken;
        }
    }
}