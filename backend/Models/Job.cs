using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class Job
{
    [Key]
    public Guid id { get; set; }

    public string? Title { get; set; }

    public string? Organization { get; set; }

    public string? Description { get; set; }

    public string? ImgUrl { get; set; }

    [ForeignKey("UserId")]
    public Guid UserId { get; set; }

    public User? User { get; set; }

}