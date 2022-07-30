using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class JombleContext : DbContext
{
    public JombleContext(DbContextOptions<JombleContext> options)
        : base(options)
    {

    }

    // public DbSet<Event>? Events { get; set; }
    public DbSet<User>? Users { get; set; }
    // public DbSet<EventUser>? EventUser { get; set; }
    // public DbSet<Comment>? Comments { get; set; }

    // public static List<Event> GetSeedEvents()
    // {
    //     List<Event> events = new List<Event>() {
    //        new Event() {
    //         EventId = new Guid("38b47a67-d603-4dd5-befe-117f96d4c058"),
    //         Name = "Bob's Birthday",
    //         Description = "Join us in celebrating Bob's birthday!",
    //         Picture = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    //         StartDate =  DateTime.Now,
    //         EndDate =  DateTime.Now,
    //         Location = "4321 Giraffe St,Coquitlam,BC,Canada",
    //         id = new Guid("86782f80-181b-4f40-8016-0800cfe42b13"),
    //         Ended = false
    //        },
    //         new Event() {
    //         EventId = new Guid("e942a3dd-5074-431d-888f-4466e519fa8d"),
    //         Name = "Hang Out",
    //         StartDate =  DateTime.Now,
    //         EndDate =  DateTime.Now,
    //         Description = "Let's hang out!",
    //         Location = "1234 Monkey St,Burnaby,BC,Canada",
    //         id = new Guid("86782f80-181b-4f40-8016-0800cfe42b13"),
    //         Ended = false
    //        }
    //     };
    //     return events;
    // }

    public static List<User> GetSeedUsers()
    {
        List<User> users = new List<User>() {
           new User() {
            id = new Guid("d911c5bd-074e-492b-b389-c5fe413a874d"),
            FirstName = "Arash",
            LastName = "Saadati",
            Email = "1@1.com",
            Password = "password"
           }
        };
        return users;
    }


    // public static List<EventUser> GetSeedEventUsers()
    // {
    //     List<EventUser> eventUsers = new List<EventUser>() {
    //         new EventUser() {
    //             id = new Guid("86782f80-181b-4f40-8016-0800cfe42b13"),
    //             EventId = new Guid("38b47a67-d603-4dd5-befe-117f96d4c058"),
    //             Attended = false
    //        }
    //     };
    //     return eventUsers;
    // }


    // public static List<Comment> GetSeedComments()
    // {
    //     List<Comment> comments = new List<Comment>() {
    //        new Comment() {
    //            CommentId = new Guid("6d7b8602-e0fb-4685-949e-6f80c63ef57d"),
    //            EventId = new Guid("38b47a67-d603-4dd5-befe-117f96d4c058"),
    //            id = new Guid("86782f80-181b-4f40-8016-0800cfe42b13"),
    //            SentAt = DateTime.Now,
    //            Message = "RIP!"
    //        }
    //     };
    //     return comments;
    // }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<User>().HasData(GetSeedUsers());
        // builder.Entity<Event>().HasData(
        //     GetSeedEvents()
        // );
        // builder.Entity<Comment>().HasData(
        //     GetSeedComments()
        // );
        // builder.Entity<Event>().HasOne(e => e.User);
        // builder.Entity<User>().HasMany(u => u.Events).WithMany(e => e.Users)
        //     .UsingEntity<EventUser>(
        //         j => j.HasOne(eu => eu.Event).WithMany(e => e.EventsUsers).HasForeignKey(eu => eu.EventId),
        //         j => j.HasOne(eu => eu.User).WithMany(u => u.EventsUsers).HasForeignKey(eu => eu.id),
        //         j =>
        //         {
        //             j.HasKey(eu => new { eu.EventId, eu.id });
        //             j.HasData(GetSeedEventUsers());
        //         }
        //         );
    }
}