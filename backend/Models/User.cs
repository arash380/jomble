using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public class User
{
    [Key]
    public Guid id { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }
}