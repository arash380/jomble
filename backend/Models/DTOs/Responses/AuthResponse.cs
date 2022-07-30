namespace backend.Models.DTOs.Responses
{
    public class AuthResponse
    {
        public string? Token { get; set; }
        public bool Success { get; set; }
        public List<string>? Errors { get; set; }
    }
}