using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Net;

namespace AmbientLabsWebApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        [HttpPost("send")]
        public async Task<IActionResult> SendEmail([FromBody] EmailDto emailDto)
        {
            try
            {
                await SendEmailAsync(emailDto.From, emailDto.Subject, emailDto.Body);
                return Ok(new { message = "Email sent successfully!" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"Failed to send email: {ex.Message}" });
            }
        }
        //App Password: ebxr jopu fepn tqfd
        private async Task SendEmailAsync(string fromEmail, string subject, string body)
        {
            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential("bksinn@gmail.com", "ebxr jopu fepn tqfd"),
                EnableSsl = true,
            };

            var mailMessage = new MailMessage
            {
                From = new MailAddress(fromEmail),
                Subject = subject,
                Body = body,
                IsBodyHtml = true,
            };
            mailMessage.To.Add("ambientlabs9@gmail.com");

            await smtpClient.SendMailAsync(mailMessage);
        }
    }


    public class EmailDto
    {
        public string From { get; set; } = String.Empty;
        public string Subject { get; set; } = String.Empty;
        public string Body { get; set; } = String.Empty;
    }
}
