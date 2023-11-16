namespace backend.Models.DTOs.Responses
{
    public class UserResponse
    {
        public Guid id { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? Email { get; set; }
    }
}