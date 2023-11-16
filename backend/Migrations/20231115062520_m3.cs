using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    public partial class m3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Organization",
                table: "Jobs",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "Jobs",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "id",
                keyValue: new Guid("d911c5bd-074e-492b-b389-c5fe413a874c"),
                columns: new[] { "Organization", "UserId" },
                values: new object[] { "SFU", new Guid("d911c5bd-074e-492b-b389-c5fe413a874d") });

            migrationBuilder.InsertData(
                table: "Jobs",
                columns: new[] { "id", "Description", "ImgUrl", "Organization", "Title", "UserId" },
                values: new object[] { new Guid("d911c5bd-074e-492b-b389-c5fe413a874d"), "A second description", "https://resources.workable.com/wp-content/uploads/2018/01/internal-hiring-featured.png", "BCIT", "Software Engineer", new Guid("d911c5bd-074e-492b-b389-c5fe413a874d") });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "id",
                keyValue: new Guid("d911c5bd-074e-492b-b389-c5fe413a874d"),
                column: "Password",
                value: "$2a$11$4ZBTbKgVrRuBSSwprBf8/.xLj8Pzz/4JGy8s3bLuwm4DyFa7qqBv6");

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_UserId",
                table: "Jobs",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Jobs_Users_UserId",
                table: "Jobs",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Jobs_Users_UserId",
                table: "Jobs");

            migrationBuilder.DropIndex(
                name: "IX_Jobs_UserId",
                table: "Jobs");

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "id",
                keyValue: new Guid("d911c5bd-074e-492b-b389-c5fe413a874d"));

            migrationBuilder.DropColumn(
                name: "Organization",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Jobs");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "id",
                keyValue: new Guid("d911c5bd-074e-492b-b389-c5fe413a874d"),
                column: "Password",
                value: "password");
        }
    }
}
