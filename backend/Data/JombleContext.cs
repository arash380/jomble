using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class JombleContext : DbContext
{
    public JombleContext(DbContextOptions<JombleContext> options)
        : base(options)
    {

    }

    public DbSet<Job>? Jobs { get; set; }
    public DbSet<User>? Users { get; set; }

    public static List<User> GetSeedUsers()
    {
        List<User> users = new List<User>() {
           new User() {
            id = new Guid("d911c5bd-074e-492b-b389-c5fe413a874d"),
            FirstName = "Arash",
            LastName = "Saadati",
            Email = "1@1.com",
            Password = BCrypt.Net.BCrypt.HashPassword("password")
           }
        };
        return users;
    }

    public static List<Job> GetSeedJobs()
    {
        List<Job> jobs = new List<Job>() {
           new Job() {
            id = new Guid("d911c5bd-074e-492b-b389-c5fe413a874c"),
            Description="A random description",
            ImgUrl="https://resources.workable.com/wp-content/uploads/2018/01/internal-hiring-featured.png",
            Title="Fry cook at the Krusty Krab",
            UserId=new Guid("d911c5bd-074e-492b-b389-c5fe413a874d"),
            Organization="SFU"
           },
           new Job() {
            id = new Guid("d911c5bd-074e-492b-b389-c5fe413a874d"),
            Description="A second description",
            ImgUrl="https://resources.workable.com/wp-content/uploads/2018/01/internal-hiring-featured.png",
            Title="Software Engineer",
            UserId=new Guid("d911c5bd-074e-492b-b389-c5fe413a874d"),
            Organization="BCIT"
           },
        };
        return jobs;
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<User>().HasData(GetSeedUsers());
        builder.Entity<Job>().HasData(GetSeedJobs());
        builder.Entity<Job>()
                .HasOne(j => j.User)
                .WithMany(u => u.Jobs)
                .HasForeignKey(j => j.UserId);
    }
}