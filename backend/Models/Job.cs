using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public class Job
{
    [Key]
    public Guid id { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public string? ImgUrl { get; set; }

}